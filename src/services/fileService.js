const uploadSingle = async (fileObject) => {
  let saveName = Date.now() + fileObject.name;
  let uploadPath = "src/uploads/" + saveName;
  try {
    await fileObject.mv(uploadPath);
    return {
      status: "success",
      link: saveName,
      error: null,
    };
  } catch (e) {
    return {
      status: "fail",
      link: null,
      error: JSON.stringify(e),
    };
  }
};
const uploadMult = () => {};
module.exports = {
  uploadSingle,
  uploadMult,
};
