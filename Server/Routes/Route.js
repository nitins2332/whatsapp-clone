import express from "express";

import { addUser, getUsers } from "../Controller/User-Controller.js";
import { newConversation } from "../Controller/Conversation-controller.js";

const route = express.Router();

route.post("/add", addUser);
route.get("/users", getUsers);

route.post("/conversations/add", newConversation);

export default route;
