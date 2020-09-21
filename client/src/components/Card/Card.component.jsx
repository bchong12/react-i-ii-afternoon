import React from "react";

import "./Card.component.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="flex-right">
        <h3 className="card-number">
          {props.index}/{props.last}
        </h3>
      </div>
      <div className="other-text">
        <h1 className="title">{props.title}</h1>
        <p>
          <strong>From: </strong>
          {props.from}
        </p>
        <p>
          <strong>Job Title: </strong>
          {props.job}
        </p>
        <p>
          <strong>Employer: </strong>
          {props.employer}
        </p>
        <h3>Favorite Movies:</h3>
        <p className="movie-text">1. {props.movie1}</p>
        <p className="movie-text">2. {props.movie2}</p>
        <p className="movie-text">3. {props.movie3}</p>
      </div>
    </div>
  );
};

export default Card;
