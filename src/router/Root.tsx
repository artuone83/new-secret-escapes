import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, ResultsPage, DetailsPage, NoMatchPage } from "pages";
import { Layout } from "components";

export const Root: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<ResultsPage />} />
        <Route path="sale/:id" element={<DetailsPage />} />

        <Route path="*" element={<NoMatchPage />} />
      </Route>
    </Routes>
  );
};
