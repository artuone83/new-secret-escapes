import { FC, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useQuery, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { ApolloQueryError, Loading } from "components";
import { Maybe, Query, Sale } from "types";

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

export interface LocationState {
  resultsList: Maybe<Sale>[];
  resultCount: Maybe<number> | undefined;
}

export const Search: FC = () => {
  const [search, setSearch] = useState("");
  const [fetchData, setFetchData] = useState(false);

  const navigate = useNavigate();
  const { loading, error } = useQuery<Pick<Query, "saleSearch">>(GET_SALES, {
    variables: { query: search },
    skip: !fetchData,
    onCompleted: (data) => {
      const state: LocationState = {
        resultsList: data?.saleSearch?.sales || [],
        resultCount: data?.saleSearch?.resultCount,
      };

      navigate(`/search?query=${search}`, {
        state,
      });
    },
  });

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search) {
      setFetchData(true);
    }
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <TextField
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            label="Where do you want to go?"
            type="search"
            value={search}
            fullWidth
            onChange={(e) => {
              setSearch(e.target.value);

              if (fetchData) {
                setFetchData(false);
              }
            }}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={!search}
            sx={{ alignSelf: "stretch" }}
          >
            Search
          </Button>
        </Box>
      </form>
      {loading && (
        <Box marginTop={2}>
          <Loading />
        </Box>
      )}
      {error && <ApolloQueryError message={error.message} />}
    </div>
  );
};
