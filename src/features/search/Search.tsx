import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ApolloQueryError, Loading } from "components";
import { Maybe, Sale, useSaleSearchQuery } from "generated";

export interface LocationState {
  resultsList: Maybe<Omit<Sale, "type">>[];
  resultCount: Maybe<number> | undefined;
}

export const DEFAULT_TRAVEL_TYPE = "HOTEL_ONLY";

export const Search: FC = () => {
  const [search, setSearch] = useState("");
  const [fetchData, setFetchData] = useState(false);

  const navigate = useNavigate();
  const { loading, error } = useSaleSearchQuery({
    variables: {
      query: search,
      travelTypes: DEFAULT_TRAVEL_TYPE,
    },
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

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search) {
      setFetchData(true);
    }
  };

  const onSearchChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearch(e.target.value);
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
            onChange={onSearchChange}
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
