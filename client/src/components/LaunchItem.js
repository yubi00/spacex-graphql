import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const LaunchItem = ({ item }) => {
  return (
    <div className='card card-body mb-3'>
      <div className='row'>
        <div className='col-md-9'>
          <h4 className={item.success ? "text-success" : "text-danger"}>
            {" "}
            {item.name}{" "}
          </h4>
          <p>
            <Moment date={item.date_local} format='MMM Do YYYY, h:mm:ss a' />
          </p>
        </div>
        <div className='col-md-3'>
          <Link to={`/launch/${item.id}`} className='btn btn-secondary'>
            Launch Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LaunchItem;
