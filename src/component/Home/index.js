import { React, useState, useEffect } from "react";
import axios from "axios";
// import { Card, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import Cards from "../Card";
import "./home.css";
const Home = () => {
  const [movies, setMovies] = useState([{ id: "" }]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a"
      )
      .then((result) => {
        const _result = result.data.results;
        console.log(_result, "_result");
        setMovies([..._result]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h4 className="title">Movies</h4>
      <div className="cards">
        {movies.map((movie) => (
          <Cards movie={movie} key={movie.id.toString()} />
        ))}
      </div>
    </div>
  );
};

export default Home;
