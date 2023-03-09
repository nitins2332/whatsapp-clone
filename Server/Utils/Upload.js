import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import dotenv from "dotenv";

dotenv.config();

const UserName = process.env.Db_username;
const PassWord = process.env.Db_password;

const storage = new GridFsStorage({
  url: `mongodb+srv://${UserName}:${PassWord}@reactwhatsappclone.lh0cwek.mongodb.net/?retryWrites=true&w=majority`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  file: (req, file) => {
    const match = ["image/jpg", "image/jpeg", "image/png"];

    if (match.indexOf(file.mimeType) === -1) {
      return `${Date.now()}-file-${file.originalname}`;
    }

    return {
      backetName: "photos",
      fileName: `${Date.now()}-file-${file.originalname}`,
    };
  },
});

export default multer({ storage });
