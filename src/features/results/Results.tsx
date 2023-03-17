import { FC } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { GoBackButton, MainHeading, MediaCard, NoResult } from "components";
import { getPlural } from "utils";
import { LocationState } from "features/search";

export const Results: FC = () => {
  const { state }: { state: LocationState | null } = useLocation();

  if (!state) {
    return null;
  }

  const noResults = state.resultsList.length === 0;
  const heading = `${state.resultCount} ${getPlural(
    "deal",
    state?.resultCount || 0
  )}`;

  return (
    <>
      <MainHeading size="s">{heading}</MainHeading>
      {!noResults ? (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            "div.MuiPaper-root:last-child": {
              flex: 0,
            },
          }}
        >
          {state?.resultsList.map((sale) => (
            <MediaCard
              key={sale?.id}
              id={sale?.id || ""}
              image={sale?.photos?.[0]?.url || ""}
              title={sale?.editorial?.title || ""}
              description={sale?.editorial?.destinationName || ""}
              fullWidth={false}
            />
          ))}
        </Box>
      ) : (
        <NoResult>
          <GoBackButton />
        </NoResult>
      )}
    </>
  );
};
