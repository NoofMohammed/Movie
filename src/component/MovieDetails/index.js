import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import Card from "../Card";
import { Card, Button } from "react-bootstrap";

import "./MovieDetails.css";
const MovieDetails = () => {
  const [movie, setMovie] = useState({ id: "", genres: [""] });
  const [genres, setGenres] = useState([""]);
  const { id } = useParams();
  console.log(id, "iiiiidddddddddddddddddddd");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a`
      )
      .then((result) => {
        console.log(result, "resultmmmmmmmmmmmmmmmmmmmm");
        setMovie(result.data);
        setGenres(
          genres.map((genre) => {
            console.log(genre, "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
            return genre.name;
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {console.log(genres, "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")}
      <Card>
        <div>
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${movie.poster_path}`}
          />
        </div>
        <div>
          <Card.Body>
            <Card.Title>{movie.original_title}</Card.Title>
            <Card.Text>{movie.overview}</Card.Text>
            <div className="date&votes">
              <Card.Text>Relase Date: {movie.release_date}</Card.Text>
              <Card.Text>{movie.vote_count} Votes</Card.Text>
            </div>
            <div className="details1">
              <Card.Text>Genres: {genres.join(",")}.</Card.Text>
              <Card.Text>Status: {movie.status}.</Card.Text>
              <Card.Text>Duration: {movie.runtime}.</Card.Text>
            </div>
            <div className="details2">
              <Card.Text>Revenue: {movie.revenue} $.</Card.Text>
              <Card.Text>Budget: {movie.budget} $.</Card.Text>
              <Card.Text>Movie Home Page</Card.Text>
            </div>
            <div className="buttons">
              <Button variant="primary">Back To Home</Button>
              <Button variant="primary">Go To Favorites</Button>
              <Button variant="primary">Added To Favorites</Button>
            </div>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default MovieDetails;
