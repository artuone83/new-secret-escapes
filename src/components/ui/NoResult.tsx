import { FC } from "react";
import { Stack, Typography } from "@mui/material";

const HEADING = "Sorry, No result found.";
const BODY = "Please try another way.";

export const NoResult: FC<Partial<WithChildren>> = ({ children }) => (
  <Stack
    sx={{
      padding: "16px 18px",
      borderRadius: "8px",
      background: "rgba(4, 92, 195, 0.05)",
      alignItems: "center",
    }}
    spacing={1}
  >
    <Typography variant="h6">{HEADING}</Typography>
    <Typography variant="body1" mt={1}>
      {BODY}
    </Typography>
    {children}
  </Stack>
);
