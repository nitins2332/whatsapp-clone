import { React, useContext, useState } from "react";

import { Box, styled } from "@mui/material";
import { AccountContext } from "../../../Constext/AccountProvider";
import { newMessage } from "../../../Service/Api";

// Component
import Footer from "./Footer";

const Wrapper = styled(Box)`
  background-image: url(https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png);
  background-size: 50%;
`;

const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;

const Messages = ({ conversation }) => {
  const { account, person } = useContext(AccountContext);

  const [value, setValue] = useState("");

  const sendText = async (event) => {
    // console.log(event);
    const code = event.keyCode || event.which;
    if (code === 13) {
      let message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: "text",
        text: value,
      };
      console.log(message);
      await newMessage(message);

      setValue("");
    }
  };

  return (
    <Wrapper>
      <Component>Hello</Component>
      <Footer sendText={sendText} setValue={setValue} value={value} />
    </Wrapper>
  );
};

export default Messages;
