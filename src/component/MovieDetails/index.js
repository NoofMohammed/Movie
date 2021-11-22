import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
// import Card from "../Card";
import { Card, Button } from "react-bootstrap";
// import {Button} from 'react-bootstrap/Button'

import "./MovieDetails.css";
const MovieDetails = () => {
  const [movie, setMovie] = useState({ id: "", genres: [""] });
  const [genres, setGenres] = useState([""]);
  const [favorite, setFavorite] = useState([]);

  const { id } = useParams();
  // const navigate = useNavigate();
  console.log(id, "iiiiidddddddddddddddddddd");

  // const backToHome = () => {
  //   navigate.push("/home");
  // };
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
        setFavorite();
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const addToFavorites = () => {
  //   favorite.push();
  // };

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
            <Card.Text className="descripe">{movie.overview}</Card.Text>
            <div className="date&votes">
              <Card.Text className="date_votes">
                Relase Date: {movie.release_date}
              </Card.Text>
              <Card.Text className="date_votes">
                {movie.vote_count} Votes
              </Card.Text>
            </div>
            <div className="details1">
              <Card.Text>
                Genres: <span>{genres.join(",")}</span>.
              </Card.Text>
              <Card.Text>
                Status: <span>{movie.status}</span>.
              </Card.Text>
              <Card.Text>
                Duration: <span>{movie.runtime}</span>.
              </Card.Text>
            </div>
            <div className="details2">
              <Card.Text>
                Revenue: <span>{movie.revenue}</span> $.
              </Card.Text>
              <Card.Text>
                Budget: <span>{movie.budget}</span> $.
              </Card.Text>
              <Card.Text>
                <span>Movie Home Page</span>
              </Card.Text>
            </div>
            <div className="buttons">
              <Link to="/">
                <Button onClick="/home" variant="primary">
                  Back To Home
                </Button>
              </Link>
              <Link to="/favorites">
                <Button onClick="/favorites" variant="warning">
                  Go To Favorites
                </Button>
              </Link>
              <Button variant="primary">Added To Favorites</Button>
            </div>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default MovieDetails;
