import { useEffect, useState, useContext } from "react";
import React from "react";

import { Box, styled, Divider } from "@mui/material";

import { getUsers } from "../../../Service/Api";
import { AccountContext } from "../../../Constext/AccountProvider";

// Component
import Conversations from "./Conversations";

const Component = styled(Box)`
  height: 81vh;
  overflow: overlay;
`;

const StyledDivider = styled(Divider)`
  margin: 0 0 0 70px;
  background-color: #e9edef;
  opacity: 0.6;
`;

const Conversation = ({ text }) => {
  const [users, setUsers] = useState([]);

  const { account } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      let res = await getUsers();
      const filteredData = res.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );

      setUsers(filteredData);
    };
    fetchData();
  }, [text]);

  return (
    <Component>
      {users.map(
        (user) =>
          user.sub !== account.sub && (
            <>
              <Conversations user={user} />
              <StyledDivider />
            </>
          )
      )}
    </Component>
  );
};

export default Conversation;
