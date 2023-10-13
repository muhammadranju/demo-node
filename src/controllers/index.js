const githubData = require("../data/data.json");

const homeGetController = (req, res) => {
  try {
    return res.status(200).send("<h1>Hello welcome</h1>");
  } catch (error) {
    console.log(error);
  }
};
const githubGetController = (req, res) => {
  try {
    return res.status(200).json(githubData);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  homeGetController,
  githubGetController,
};
