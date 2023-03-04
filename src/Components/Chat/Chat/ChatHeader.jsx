import React from "react";

import { Box, Typography, styled } from "@mui/material";
import { Search, MoreVert } from "@mui/icons-material";

import { defaultProfilePicture } from "../../../Constants/Data";

const Header = styled(Box)`
  height: 44px;
  background: #ededed;
  display: flex;
  padding: 8px 16px;
  align-items: center;
`;

const Image = styled("img")({
  height: 40,
  width: 40,
  objectFit: "cover",
  borderRadius: "50%",
  cursor: "pointer",
});

const Name = styled(Typography)`
  margin-left: 12px !important;
  cursor: pointer;
`;

const Status = styled(Typography)`
  margin-left: 12px !important;
  font-size: 12px;
  color: rgb(0, 0, 0, 0.6);
`;

const RightContainer = styled(Box)`
  margin-left: auto;
  & > * {
    margin-left: 2px;
    padding: 8px;
    color: #000;
    font-size: 24px;
    cursor: pointer;
  }
  & :first-child {
    margin-right: 8px;
    margin-top: 3px;
  }
`;

const ChatHeader = ({ person }) => {
  return (
    <Header>
      <Image src={person.picture} alt="dp" />
      <Box>
        <Name>{person.name}</Name>
        <Status>Offline</Status>
      </Box>
      <RightContainer>
        <Search />
        <MoreVert />
      </RightContainer>
    </Header>
  );
};

export default ChatHeader;
