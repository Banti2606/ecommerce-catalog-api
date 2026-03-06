require("dotenv").config();

const connectDB = require("./src/config/db");
const app = require("./src/app");

let isConnected = false;

async function connect() {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
    console.log("MongoDB Atlas Connected");
  }
}

module.exports = async (req, res) => {
  await connect();
  return app(req, res);
};