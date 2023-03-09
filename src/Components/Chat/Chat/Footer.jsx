import { React, useEffect } from "react";
import { Box, InputBase, styled } from "@mui/material";

import { UploadFile } from "../../../Service/Api";

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
    cursor: pointer;
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

const Footer = ({ sendText, setValue, value, file, setFile, setImage }) => {
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await UploadFile(data);
        console.log(response);
        setImage(response.data);
      }
    };
    getImage();
  }, [file]);

  const onFileChange = (e) => {
    console.log(e);
    setFile(e.target.files[0]);
    setValue(e.target.files[0].name);
  };

  return (
    <Container>
      <EmojiEmotionsOutlinedIcon />
      <label htmlFor="fileInput">
        <ClipIcon />
      </label>
      <input
        type="file"
        id="fileInput"
        style={{
          display: "none",
        }}
        onChange={(e) => onFileChange(e)}
      />
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
