const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

exports.register = (req, res) => {
    const { name, username, email, password, no_telp, profile_image, role } = req.body;

    // Validasi input
    if (!name || !username || !email || !password) {
        return res.status(400).json({ message: 'Silakan isi semua kolom' });
    }

    // Hash password
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) return res.status(500).json({ message: 'Terjadi kesalahan saat hashing kata sandi' });

        // Simpan user ke database
        const sql = 'INSERT INTO users (name, username, email, password, no_telp, profile_image, role) VALUES (?, ?, ?, ?, ?, ?, ?)';
        db.query(sql, [name, username, email, hashedPassword, no_telp, profile_image, role], (err, result) => {
            if (err) return res.status(500).json({ message: 'Kesalahan saat mendaftarkan pengguna' });
            res.status(201).json({ message: 'Pengguna berhasil mendaftar' });
        });
    });
};

exports.login = (req, res) => {
    const { email, password } = req.body;

    // Validasi input
    if (!email || !password) {
        return res.status(400).json({ message: 'Silakan isi semua kolom' });
    }

    // Cari user berdasarkan email
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], (err, results) => {
        if (err) return res.status(500).json({ message: 'Terjadi kesalahan saat menemukan pengguna' });

        if (results.length === 0) {
            return res.status(404).json({ message: 'Pengguna tidak ditemukan' });
        }

        const user = results[0];

        // Cek password
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) return res.status(500).json({ message: 'Kesalahan saat memeriksa kata sandi' });
            if (!isMatch) return res.status(400).json({ message: 'Kredensial tidak valid' });

            // Buat token
            const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

            res.status(200).json({ message: 'Login berhasil', token });
        });
    });
};