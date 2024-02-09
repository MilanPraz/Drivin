require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connected = await mongoose.connect(process.env.MONGO_URI, {
    });
    console.log(`MongoDB connection SUCCESS ${connected.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection FAIL");
    process.exit(1);
  }
};

module.exports = connectDB