import { gql } from "@apollo/client";

export const GET_SALES = gql`
  query SaleSearch($query: String, $travelTypes: [String]) {
    saleSearch(query: $query, travelTypes: $travelTypes) {
      resultCount
      sales(limit: 10, offset: 0) {
        id
        editorial {
          title
          destinationName
        }
        photos {
          url
        }
      }
    }
  }
`;
