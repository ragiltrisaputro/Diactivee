import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CheckoutPage() {
  const navigate = useNavigate();

  const handlePayment = async () => {
    try {
      // Kirim permintaan untuk membuat transaksi ke server
      const response = await fetch('/api/create-transaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // Kirim detail pembayaran ke server
        body: JSON.stringify({
          // Tambahkan detail pembayaran di sini
        })
      });
      const data = await response.json();

      // Jika transaksi berhasil dibuat, arahkan pengguna ke halaman pembayaran Midtrans
      if (response.ok) {
        navigate(data.redirectUrl); // Redirect to Midtrans payment page
      } else {
        // Handle error jika transaksi gagal dibuat
        console.error('Gagal membuat transaksi:', data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Halaman Checkout</h1>
      {/* Formulir detail pembayaran */}
      <button onClick={handlePayment}>Bayar</button>
    </div>
  );
}
