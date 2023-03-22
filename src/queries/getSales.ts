import { gql } from "@apollo/client";

export const GET_SALES = gql`
  query SaleSearch(
    $query: String
    $travelTypes: [String]
    $limit: Int = 10
    $offset: Int = 0
  ) {
    saleSearch(query: $query, travelTypes: $travelTypes) {
      resultCount
      sales(limit: $limit, offset: $offset) {
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
