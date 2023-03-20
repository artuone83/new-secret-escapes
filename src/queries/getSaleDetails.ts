import { gql } from "@apollo/client";

export const GET_SALE_DETAILS = gql`
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
