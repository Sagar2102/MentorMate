// import multer from "multer";

// const upload = multer({dest:"uploads/"});
// export default upload
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    return {
      folder: "uploads", // Folder in Cloudinary
      resource_type: file.mimetype.startsWith("video/") ? "video" : "image", // Detect image/video
      allowed_formats: ["jpg", "png", "jpeg", "gif", "mp4", "mov", "avi", "mkv"], // Allowed formats
    };
  },
});

const upload = multer({ storage });

export default upload;
