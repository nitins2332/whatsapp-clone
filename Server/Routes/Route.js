import express from "express";

import { addUser, getUsers } from "../Controller/User-Controller.js";
import {
  newConversation,
  getConversation,
} from "../Controller/Conversation-controller.js";

import { newMessage, getMessages } from "../Controller/Message-Controller.js";

const route = express.Router();

route.post("/add", addUser);
route.get("/users", getUsers);

route.post("/conversations/add", newConversation);
route.post("/conversation/get", getConversation);

route.post("/message/add", newMessage);
route.get("/message/get/:id", getMessages);

export default route;
