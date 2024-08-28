const uploadSingle = async (fileObject) => {
  let uploadPath = "src/uploads/" + Date.now() + fileObject.name;
  try {
    await fileObject.mv(uploadPath);
    return {
      status: "success",
      link: "link",
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
