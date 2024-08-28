const { uploadSingle } = require("../services/fileService");

const postUploadFile = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send("No files were uploaded.");
    return;
  }
  let rs = await uploadSingle(req.files.image);
  return res.status(200).json({ rs });
};

module.exports = { postUploadFile };
