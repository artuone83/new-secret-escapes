import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";

export const Layout: FC = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};
