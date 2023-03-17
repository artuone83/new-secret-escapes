import { FC } from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { ApolloQueryError, Loading, MainHeading, MediaCard } from "components";
import { Box, Paper, Typography } from "@mui/material";
import { Query } from "types";

const GET_SALE_DETAILS = gql`
  query SaleDetails($saleId: String!) {
    sale(saleId: $saleId) {
      editorial {
        title
        destinationName
        hotelDetails
      }
      prices {
        leadRate {
          forDisplay
        }
      }
      photos {
        url
      }
    }
  }
`;

export const Details: FC = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery<Pick<Query, "sale">>(
    GET_SALE_DETAILS,
    {
      variables: { saleId: id },
    }
  );

  if (loading) return <Loading />;
  if (error) return <ApolloQueryError message={error.message} />;
  if (!data) return null;

  const { sale } = data || {};

  return (
    <>
      <Paper sx={{ padding: 2, marginBottom: 2 }} elevation={3}>
        <Box>
          <MainHeading>{sale?.editorial?.title}</MainHeading>
          <Typography variant="h5">
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
