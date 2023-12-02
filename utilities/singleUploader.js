const multer = require("multer");
const createError = require("http-errors");
const path = require("path");
const uploader = (
  sub_folder_path,
  allowed_file_type,
  max_file_size,
  error_message
) => {
  // multer upload object
  const upload_folder = `${__dirname}/../public/uploads/${sub_folder_path}`;
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, upload_folder);
    },
    filename: (req, file, cb) => {
      const fileExt = path.extname(file.originalname);
      const filename =
        file.originalname
          .replace(fileExt, "")
          .toLowerCase()
          .split("")
          .join("_") +
        "+ " +
        Date.now();
      cb(null, filename + fileExt);
    },
  });

  const upload = multer({
    storage: storage,
    limits: {
      fileSize: max_file_size,
    },
    fileFilter: (req, file, cb) => {
      if (allowed_file_type.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(createError(error_message));
      }
    },
  });

  return upload;
};

module.exports = uploader;
