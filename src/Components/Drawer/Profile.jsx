import { useContext } from "react";

import { Box, styled, Typography } from "@mui/material";
import React from "react";

import { AccountContext } from "../../Constext/AccountProvider";

const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
`;

const Image = styled("img")({
  width: 200,
  height: 200,
  borderRadius: "50%",
  padding: "25px 0",
});

const BoxWrapper = styled(Box)`
  background: #ffffff;
  padding: 12px 30px 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);

  & :first-child {
    font-size: 13px;
    color: #009688;
    font-weight: 200;
  }

  & :last-child {
    margin: 14px 0;
    color: #4a4a4a;
  }
`;

const DescriptionContainer = styled(Box)`
  padding: 15px 20px 28px 30px;
  & > p {
    font-size: 13px;
    color: #8696a0;
  }
`;

const Profile = () => {
  const { account } = useContext(AccountContext);

  return (
    <>
      {/* Section 1 */}
      <ImageContainer>
        <Image src={account.picture} alt="Profile DP" />
      </ImageContainer>
      {/* Section 2 */}
      <BoxWrapper>
        <Typography>Your Name</Typography>
        <Typography>{account.name}</Typography>
      </BoxWrapper>
      {/* Section 3 */}
      <DescriptionContainer>
        <Typography>
          This is not your usename or pin. This name will be visible to your
          WhatsApp contacts.
        </Typography>
      </DescriptionContainer>
      {/* Section 4 */}
      <BoxWrapper>
        <Typography>About</Typography>
        <Typography>Eat! Sleep! Repeat!</Typography>
      </BoxWrapper>
    </>
  );
};

export default Profile;