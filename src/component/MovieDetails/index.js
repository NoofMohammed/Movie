import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Modal, Card, Button } from "react-bootstrap";

import "./MovieDetails.css";
const MovieDetails = () => {
  const [movie, setMovie] = useState({ id: "", genres: [""] });
  const [genres, setGenres] = useState([""]);
  const [show, setShow] = useState(false);

  const { id } = useParams();
  const addToFavorite = () => {
    console.log(movie.data.id, "id setFavorite");
    const array = JSON.parse(localStorage.getItem("my_favorite")) || [];
    console.log(array);
    array.push(movie.data.id);
    localStorage.setItem("my_favorite", JSON.stringify(array));
    console.log(array, "array");
    setShow(false);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a`
      )
      .then((result) => {
        setMovie(result);
        setGenres(
          genres.map((genre) => {
            // console.log(genre, "genre");
            return genre.name;
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {/* {console.log(genres, "genres")} */}
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
                <Button variant="primary">Back To Home</Button>
              </Link>
              <Link to="/favorites">
                <Button variant="warning">Go To Favorites</Button>
              </Link>

              <Button variant="primary" onClick={handleShow}>
                Added To Favorite
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Add Movie To Favorites</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Do you want to add Venom: Let There Be Carnage to favorites
                  list?
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    No
                  </Button>
                  <Button variant="primary" onClick={addToFavorite}>
                    yes
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default MovieDetails;
