import { React, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./card.css";
const Cards = ({ movie }) => {
  console.log(movie, "movie");

  return (
    <div className="showMovies">
      <Card className="card-movie">
        <div>
          <Card.Img
            className="movie-img"
            variant="top"
            src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${movie.poster_path}`}
            style={{ width: "10rem", height: "17rem" }}
          />
        </div>
        <div>
          <Card.Body>
            <Link className="title" to={`/details/${movie.id}`}>
              {movie.original_title}
            </Link>
            <Card.Text className="descripe">{movie.overview}</Card.Text>
            <div className="date_votes">
              <Card.Text>{movie.release_date}</Card.Text>
              <Card.Text>{movie.vote_count} Votes</Card.Text>
            </div>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};
export default Cards;
