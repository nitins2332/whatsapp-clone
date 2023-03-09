import express from "express";

import { addUser, getUsers } from "../Controller/User-Controller.js";
import {
  newConversation,
  getConversation,
} from "../Controller/Conversation-controller.js";
import { newMessage, getMessages } from "../Controller/Message-Controller.js";
import { uploadFile, getImage } from "../Controller/Image-Controller.js";

import upload from "../Utils/Upload.js";

const route = express.Router();

route.post("/add", addUser);
route.get("/users", getUsers);

route.post("/conversations/add", newConversation);
route.post("/conversation/get", getConversation);

route.post("/message/add", newMessage);
route.get("/message/get/:id", getMessages);

route.post("/file/upload", upload.single("file"), uploadFile);
route.get("/file/:filename", getImage);

export default route;
