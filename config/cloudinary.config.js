const cloudinary = require("cloudinary").v2;
const multer = require('multer')
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const dotenv = require("dotenv");

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
// { public_id: "olympic_flag"},
// function(error, result) {console.log(result)})

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    allowed_formats: ["jpg", "png", "webp"],
    // folder: "movie-gallery" // The name of the folder in cloudinary
    // resource_type: 'raw', // => this is in case you want to upload other type of files, not just images
  }
});
module.exports = multer({ storage });

// exports.uploads = (file, folder) => {
//   return new Promise((resolve) => {
//     cloudinary.uploader.upload(
//       file,
//       (result) => {
//         resolve({
//           url: result.url,
//           id: result.public_id,
//         });
//       },
//       {
//         resource_type: "auto",
//         folder: folder,
//       }
//     );
//   });
// };
