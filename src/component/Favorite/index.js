import { React, useState, useEffect } from "react";
import axios from "axios";
import Cards from "../Card";
import "./favorite.css";
// import { Modal, Card, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
const Favorite = () => {
  const [movies, setMovies] = useState([{ id: "" }]);
  const [idMovie, setIdMovie] = useState("");
  let idArray = JSON.parse(localStorage.getItem("my_favorite"));
  console.log(idArray, "idArray");

  useEffect(() => {
    console.log(idArray, "id in");
    let requests = idArray.map((id) => {
      return `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a`;
    });
    axios
      .get(requests)
      .then((result) => {
        console.log(result, "result");
        setMovies(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <h4 className="titleFavorite">Favorites Movies</h4>
      <div className="showMyFavorites">
        {console.log(movies.id, "log")}
        {/* {movies.map((movie) => (
          <Cards movie={movie} key={movie.id.toString()} />
        ))} */}
      </div>
    </>
  );
};

export default Favorite;
