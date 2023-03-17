import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useNavigateBack = (alternativePath?: string) => {
  const navigate = useNavigate();

  const navigateBack = useCallback(() => {
    return alternativePath ? navigate(alternativePath) : navigate(-1);
  }, [alternativePath, navigate]);

  return [navigateBack];
};
