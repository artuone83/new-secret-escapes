import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, ResultsPage, DetailsPage, NoMatchPage } from "pages";
import { Layout } from "components";

export const ROUTER_PATHS = {
  HOME: "/",
  SEARCH: "/search",
  DETAILS: "/sale/:id",
  NOT_FOUND: "*",
  detailsById(saleId: string) {
    return this.DETAILS.replace(":id", saleId);
  },
};

export const Root: FC = () => {
  return (
    <Routes>
      <Route path={ROUTER_PATHS.HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTER_PATHS.SEARCH} element={<ResultsPage />} />
        <Route path={ROUTER_PATHS.DETAILS} element={<DetailsPage />} />

        <Route path={ROUTER_PATHS.NOT_FOUND} element={<NoMatchPage />} />
      </Route>
    </Routes>
  );
};
