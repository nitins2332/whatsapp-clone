import { Box, styled, Typography } from "@mui/material";
import { React, useContext } from "react";

import { formatDate, downloadMedia } from "../../../Utils/Common-Utils";

import { AccountContext } from "../../../Constext/AccountProvider";

// Icons
import GetAppIcon from "@mui/icons-material/GetApp";
import { iconPDF } from "../../../Constants/Data";

const SenderSide = styled(Box)`
  background: #dcf8c6;
  max-width: 60%;
  margin-left: auto;
  padding: 5px;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
  ${"" /* margin: 5px 0; */}
`;

const ReceiverSide = styled(Box)`
  background: #ffffff;
  max-width: 60%;
  padding: 5px;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
`;

const Text = styled(Typography)`
  font-size: 14px;
  padding: 0 25px 0 5px;
`;

const Time = styled(Typography)`
  font-size: 10px;
  color: #919191;
  margin-top: 6px;
  word-break: keep-all;
  margin-top: auto;
`;

const Message = ({ message }) => {
  const { account } = useContext(AccountContext);

  return (
    // <Own>
    //   <Text>{message.text}</Text>
    //   <Time>{formatDate(message.createdAt)}</Time>
    // </Own>
    <>
      {account.sub === message.senderId ? (
        <SenderSide>
          {message.type === "file" ? (
            <ImageMessage message={message} />
          ) : (
            <TextMessage message={message} />
          )}
        </SenderSide>
      ) : (
        <ReceiverSide>
          {message.type === "file" ? (
            <ImageMessage message={message} />
          ) : (
            <TextMessage message={message} />
          )}
        </ReceiverSide>
      )}
    </>
  );
};

const ImageMessage = ({ message }) => {
  return (
    <Box style={{ position: "relative" }}>
      {message?.text?.includes(".pdf") ? (
        <Box style={{ display: "flex" }}>
          <img style={{ width: 80 }} src={iconPDF} alt="pdf" />
          <Typography style={{ fontSize: 14 }}>
            {message.text.split("/").pop()}
          </Typography>
        </Box>
      ) : (
        <img
          style={{ width: 300, height: "100%", objectFit: "cover" }}
          src={message.text}
          alt={message.text}
        />
      )}
      <Time style={{ position: "absolute", bottom: 0, right: 0 }}>
        <GetAppIcon
          onClick={(e) => downloadMedia(e, message.text)}
          style={{
            marginRight: 10,
            border: "1px solid gray",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        />

        {formatDate(message.createdAt)}
      </Time>
    </Box>
  );
};

const TextMessage = ({ message }) => {
  return (
    <>
      <Text>{message.text}</Text>
      <Time>{formatDate(message.createdAt)}</Time>
    </>
  );
};

export default Message;
