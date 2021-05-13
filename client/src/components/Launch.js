import React, { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const LAUNCH_QUERY = gql`
  query launchQuery($id: String!) {
    launch(id: $id) {
      flight_number
      name
      date_local
      success
    }
  }
`;

const Launch = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { id }
  });

  if (loading) return <p className='text-center'>Loading...</p>;
  if (error) return <p className='text-center text-danger'>Error :(</p>;

  const { name, flight_number, date_local, success } = data.launch;

  return (
    <Fragment>
      <Link to='/' className='btn btn-secondary'>
        {" "}
        Back{" "}
      </Link>
      <h1 className='display-4 my-3'>
        <span className='text-dark'>Mission: </span> {name}{" "}
      </h1>
      <ul className='list-group'>
        <li className='list-group-item text-dark'>
          Flight Number: {flight_number}
        </li>
        <li className='list-group-item text-dark'>Date: {date_local}</li>
        <li className='list-group-item text-dark'>
          success:{" "}
          <span className={success ? "text-success" : "text-danger"}>
            {success ? "Yes" : "No"}{" "}
          </span>
        </li>
      </ul>
    </Fragment>
  );
};

export default Launch;
