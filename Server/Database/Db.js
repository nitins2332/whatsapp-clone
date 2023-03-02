import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const UserName = process.env.Db_username;
const PassWord = process.env.Db_password;

const Connection = async () => {
  const URL = `mongodb+srv://${UserName}:${PassWord}@reactwhatsappclone.lh0cwek.mongodb.net/?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connection established Successfully");
  } catch (error) {
    console.log("Error while connecting to Mongoose", error.message);
  }
};

export default Connection;
