require("dotenv").config();
const { createServer } = require("http");
const app = require("./src/app/app");
const server = createServer(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
