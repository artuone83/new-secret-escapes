import { FC } from "react";
import { NavLink } from "react-router-dom";

export const Navigation: FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>
    </nav>
  );
};
