import { useContext } from "react";
import React from "react";

import { AppBar, Toolbar, styled, Box } from "@mui/material";

import { AccountContext } from "../Constext/AccountProvider";

import LoginDialog from "./Account/LoginDialog";
import ChatDialog from "./Chat/ChatDialog";
// import ChatFolder from "./Chat/ChatFolder";

const Component = styled(Box)`
  height: 100vh;
  background: #dcdcdc;
`;

const Header = styled(AppBar)`
  background-color: #00a884;
  height: 125px;
  box-shadow: none;
`;

const LoginHeader = styled(AppBar)`
  background: #00bfa5;
  height: 200px;
  box-shadow: none;
`;

const Messenger = () => {
  const { account } = useContext(AccountContext);

  return (
    <Component>
      {account ? (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <ChatDialog />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDialog />
        </>
      )}
    </Component>
  );
};

export default Messenger;
