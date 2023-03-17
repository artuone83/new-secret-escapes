import { FC } from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Loading } from "components";

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
  const { loading, error, data } = useQuery(GET_SALE_DETAILS, {
    variables: { saleId: id },
  });

  if (loading) return <Loading />;
  if (error) return <div>`Error! ${error.message}`</div>;

  return (
    <div>
      <h1>Details Page</h1>
      <section>
        <h2>{id}</h2>
        {JSON.stringify(data)}
      </section>
    </div>
  );
};
