import { React, useState, useEffect } from "react";
import axios from "axios";
import Cards from "../Card";
import "./favorite.css";
// import { Modal, Card, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
const Favorite = () => {
  const [movies, setMovies] = useState([]);
  let idArray = JSON.parse(localStorage.getItem("my_favorite"));
  console.log(idArray, "idArray");

  useEffect(() => {
    idArray.map((id) => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a`
        )
        .then((result) => {
          movies.push(result.data);
          console.log("movies", movies);
          setMovies([...movies]);
        })
        .catch((error) => {
          console.log(error);
        });
    });

    console.log(idArray, "id in");
  }, []);
  return (
    <>
      <h4 className="titleFavorite">Favorites Movies</h4>
      <div className="showMyFavorites">
        {console.log(movies, "log")}
        {movies.map((movie) => (
          <Cards movie={movie} />
        ))}
      </div>
    </>
  );
};

export default Favorite;
