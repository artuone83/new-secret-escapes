import { FC } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { Box } from "@mui/material";
import {
  ApolloQueryError,
  GoBackButton,
  Loading,
  MainHeading,
  MediaCard,
  NoResult,
} from "components";
import { getPlural } from "utils";
import { DEFAULT_TRAVEL_TYPE, LocationState } from "features/search";
import { useSaleSearchQuery } from "generated";

export const Results: FC = () => {
  const { state }: { state: LocationState | null } = useLocation();
  const [searchParams] = useSearchParams();

  const searchParamsQueryKeyValue = searchParams.get("query");

  const { loading, error, data } = useSaleSearchQuery({
    variables: {
      query: searchParamsQueryKeyValue,
      travelTypes: DEFAULT_TRAVEL_TYPE,
    },
    skip: Boolean(state) || !searchParamsQueryKeyValue,
  });

  if (loading) return <Loading />;
  if (error) return <ApolloQueryError message={error.message} />;

  if (!state && !data) {
    return null;
  }

  const salesFromData = data?.saleSearch?.sales;
  const resultsCountFromData = data?.saleSearch?.resultCount;

  const noResults =
    state?.resultsList.length === 0 || salesFromData?.length === 0;
  const heading = `${resultsCountFromData ?? state?.resultCount} ${getPlural(
    "deal",
    resultsCountFromData ?? state?.resultCount ?? 0
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
          }}
        >
          {(salesFromData ?? state?.resultsList)?.map((sale) => (
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
