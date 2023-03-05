import { React, useContext, useEffect } from "react";
import { Box } from "@mui/material";

// Component
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";

import { AccountContext } from "../../../Constext/AccountProvider";
import { getConversation } from "../../../Service/Api";

const ChatBox = () => {
  const { person, account } = useContext(AccountContext);

  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        senderId: account.sub,
        receiverId: person.sub,
      });
      console.log(data);
    };
    getConversationDetails();
  }, [person.sub]);

  return (
    <Box>
      <ChatHeader person={person} />
      <Messages person={person} />
    </Box>
  );
};

export default ChatBox;
