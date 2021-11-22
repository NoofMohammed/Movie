import { React, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./card.css";
const Cards = ({ movie }) => {
  console.log(movie, "88888");

  return (
    <div className="showMovies">
      <div className="main">
        <Card
        //    style={{ width: "40%" }}
        >
          <div className="card">
            <div>
              <Card.Img
                className="movie-img"
                variant="top"
                src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${movie.poster_path}`}
                //   style={{ width: "18rem", height: "18rem" }}
              />
            </div>
            <div>
              <Card.Body>
                <Link to={`/details/${movie.id}`}>{movie.original_title}</Link>
                <Card.Text>{movie.overview}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </div>
          </div>
        </Card>
      </div>
      ;
    </div>
  );
};
export default Cards;
