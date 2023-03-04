import { React, useContext } from "react";
import { Box } from "@mui/material";

// Component
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";

import { AccountContext } from "../../../Constext/AccountProvider";

const ChatBox = () => {
  const { person } = useContext(AccountContext);

  return (
    <Box>
      <ChatHeader person={person} />
      <Messages person={person} />
    </Box>
  );
};

export default ChatBox;
