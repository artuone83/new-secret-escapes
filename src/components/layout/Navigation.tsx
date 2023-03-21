import { FC } from "react";
import { Box, Button, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ROUTER_PATHS } from "router";

export const Navigation: FC = () => {
  return (
    <Box component="nav">
      <Box component="ul" sx={{ padding: 0, margin: 0 }}>
        <Box component="li" sx={{ listStyleType: "none" }}>
          <NavLinkStyled to={ROUTER_PATHS.HOME}>
            <Button variant="contained">Home</Button>
          </NavLinkStyled>
        </Box>
      </Box>
    </Box>
  );
};

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;

  &:visited {
    text-decoration: none;
  }

  &:hover {
    text-decoration: none;
  }

  &:active {
    text-decoration: none;
  }
`;
