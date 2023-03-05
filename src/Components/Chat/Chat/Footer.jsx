import { React } from "react";
import { Box, InputBase, styled } from "@mui/material";

//  Icons
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import MicRoundedIcon from "@mui/icons-material/MicRounded";

const Container = styled(Box)`
  height: 55px;
  background: #ededed;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 15px;

  & > * {
    margin: 0 5px;
    color: #919191;
  }
`;

const Search = styled(Box)`
  background-color: #ffffff;
  border-radius: 10px;
  width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 20px;
  height: 20px;
  padding-left: 25px;
  font-size: 14px;
`;

const ClipIcon = styled(AttachFileOutlinedIcon)`
  transform: rotate(40deg);
`;

const Footer = ({ sendText, setValue, value }) => {
  return (
    <Container>
      <EmojiEmotionsOutlinedIcon />
      <ClipIcon />
      <Search>
        <InputField
          placeholder="Type a message"
          onChange={(event) => setValue(event.target.value)}
          onKeyPress={(event) => sendText(event)}
          value={value}
        />
      </Search>
      <MicRoundedIcon />
    </Container>
  );
};

export default Footer;
