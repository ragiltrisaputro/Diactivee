// const multer = require("multer");
// const path = require("path");

// // Konfigurasi penyimpanan file
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads/profiles"); // Simpan file di dalam folder uploads/profiles
//   },
//   filename: function (req, file, cb) {
//     cb(
//       null,
//       file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//     );
//   },
// });

// const upload = multer({ storage: storage });

// module.exports = upload;
