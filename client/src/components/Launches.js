import React from "react";
import { useQuery, gql } from "@apollo/client";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";

const LAUNCHES_QUERY = gql`
  query launchesQuery {
    launches {
      id
      flight_number
      name
      date_local
      success
    }
  }
`;

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return <p className='text-center'>Loading...</p>;
  if (error) return <p className='text-center text-danger'>Error :(</p>;

  return (
    <div className='mt-2'>
      <MissionKey />
      {data.launches.map((item) => (
        <LaunchItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Launches;
