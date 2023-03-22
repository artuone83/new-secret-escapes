import { FC } from "react";
import { Typography } from "@mui/material";

export const MainHeading: FC<WithChildren> = ({ children }) => {
  return (
    <Typography component="h1" sx={{ typography: { xs: "h6", md: "h4" } }}>
      {children}
    </Typography>
  );
};
