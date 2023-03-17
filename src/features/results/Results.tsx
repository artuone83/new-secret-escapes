import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

export const Results: FC = () => {
  const { state } = useLocation();

  return (
    <div>
      <h1>Results Page</h1>
      <section>
        {state.map((result: { id: string }) => (
          <div key={result.id}>
            <Link to={`/sale/${result.id}`}>Result Details</Link>
          </div>
        ))}
      </section>
    </div>
  );
};
