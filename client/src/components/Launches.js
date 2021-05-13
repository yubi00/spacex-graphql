import React from "react";
import { useQuery, gql } from "@apollo/client";

const LAUNCHES_QUERY = gql`
  query launchesQuery {
    launches {
      flight_number
      name
      date_local
      success
    }
  }
`;

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>Launches</h2>
    </div>
  );
};

export default Launches;
