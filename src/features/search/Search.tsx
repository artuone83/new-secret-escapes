import { FC, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { Loading } from "components";

const GET_SALES = gql`
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

export const Search: FC = () => {
  const [search, setSearch] = useState("");
  const [fetchData, setFetchData] = useState(false);

  const navigate = useNavigate();
  const { loading, error } = useQuery(GET_SALES, {
    variables: { query: search },
    skip: !fetchData,
    onCompleted: (data) => {
      navigate(`/search?query=${search}`, {
        state: data.saleSearch.sales,
      });
    },
  });

  if (loading) return <Loading />;
  if (error) return <div>`Error! ${error.message}`</div>;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (search) {
            setFetchData(true);
          }
        }}
      >
        <input
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);

            if (fetchData) {
              setFetchData(false);
            }
          }}
        />
        <button type="submit" disabled={!search}>
          Search
        </button>
      </form>
    </div>
  );
};
