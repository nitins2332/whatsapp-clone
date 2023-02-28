import React from "react";
import { useState } from "react";

import { Menu, MenuItem, styled } from "@mui/material";

// Icons
import { MoreVert } from "@mui/icons-material";

const MenuOption = styled(MenuItem)`
    font-size: 14px
    padding: 15px 60px 5px 24px;
    color: #4A4A4A;
`;

const HeaderMenu = () => {
  const [open, setOpen] = useState(null);

  const handleClose = () => {
    setOpen(null);
  };

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };

  return (
    <>
      <MoreVert onClick={handleClick} />
      <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuOption onClick={handleClose}>Profile</MenuOption>
        <MenuOption onClick={handleClose}>Archived</MenuOption>
        <MenuOption onClick={handleClose}>Starred messages</MenuOption>
        <MenuOption onClick={handleClose}>Settings</MenuOption>
        <MenuOption onClick={handleClose}>Log out</MenuOption>
      </Menu>
    </>
  );
};

export default HeaderMenu;
