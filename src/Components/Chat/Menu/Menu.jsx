import React from "react";

import { Box } from "@mui/material";

import Header from "./Header";
import Search from "./Search";
import Conversation from "./Conversation";

const Menu = () => {
  return (
    <Box>
      <Header />
      <Search />
      <Conversation />
    </Box>
  );
};

export default Menu;
