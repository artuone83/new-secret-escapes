import { Box } from "@mui/material";
import { FC } from "react";
import { NavLink } from "react-router-dom";

export const Navigation: FC = () => {
  return (
    <Box component="nav">
      <Box component="ul" sx={{ padding: 0, margin: 0 }}>
        <Box component="li" sx={{ listStyleType: "none" }}>
          <NavLink to="/">Home</NavLink>
        </Box>
      </Box>
    </Box>
  );
};
