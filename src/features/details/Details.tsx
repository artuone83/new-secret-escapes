import { FC } from "react";
import { useParams } from "react-router-dom";
import { ApolloQueryError, Loading, MainHeading, MediaCard } from "components";
import { Box, Paper, Typography } from "@mui/material";
import { useSaleDetailsQuery } from "generated";

export const Details: FC = () => {
  const { id } = useParams();

  const { data, loading, error } = useSaleDetailsQuery({
    variables: {
      saleId: id!,
    },
    skip: !id,
  });

  if (loading) return <Loading />;
  if (error) return <ApolloQueryError message={error.message} />;
  if (!data) return null;

  const { sale } = data;

  return (
    <>
      <Paper sx={{ padding: 2, marginBottom: 2 }} elevation={3}>
        <Box>
          <Box mb={1}>
            <MainHeading>{sale?.editorial?.title}</MainHeading>
          </Box>

          <Typography variant="body1" mb={2}>
            {sale?.editorial?.destinationName}
          </Typography>

          <Typography variant="h4" sx={{ color: "#ff8736" }}>
            {sale?.prices?.leadRate?.forDisplay}
          </Typography>
        </Box>
      </Paper>

      <Box component="section" marginBottom={3}>
        <MediaCard
          title={sale?.editorial?.title || ""}
          image={sale?.photos?.[0]?.url || ""}
          ownInnerHtml={sale?.editorial?.hotelDetails || ""}
          imgHeight={480}
          actions={null}
        />
      </Box>
    </>
  );
};
