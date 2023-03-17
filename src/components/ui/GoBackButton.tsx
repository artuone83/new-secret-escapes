import { FC } from "react";
import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useNavigateBack } from "hooks";

export const GoBackButton: FC = () => {
  const [goBack] = useNavigateBack();

  const onGoBackClick = () => {
    goBack();
  };

  return (
    <Button onClick={onGoBackClick} sx={{ minWidth: "fit-content" }}>
      <ArrowBack />
    </Button>
  );
};
