import { FC } from "react";
import { ApolloError } from "@apollo/client";
import { Box } from "@mui/material";

export const ApolloQueryError: FC<{ message: ApolloError["message"] }> = ({
  message,
}) => {
  return <Box>`Error! ${message}`</Box>;
};
