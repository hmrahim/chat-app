const uploader = require("../../utilities/singleUploader");

const avaterUpload = (req, res, next) => {
  const upload = uploader(
    "avater",
    ["image/jpeg", "image/jpg", "image/png"],
    1000000,
    "Only jpeg,jpg,png formate allowed"
  );

  upload.any()(req, res, (error) => {
    if (error) {
      res.status(500).json({
        errors: {
          avater: {
            msg: error.message,
          },
        },
      });
    }else{
        next()
    }
  });
};

module.exports = avaterUpload;
