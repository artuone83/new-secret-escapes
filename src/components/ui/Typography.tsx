import { FC } from "react";
import { Typography } from "@mui/material";

export const MainHeading: FC<WithChildren & { size?: "s" | "l" }> = ({
  children,
  size = "l",
}) => {
  return (
    <Typography component="h1" variant={size !== "l" ? "h4" : "h3"}>
      {children}
    </Typography>
  );
};
