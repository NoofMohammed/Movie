import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home/index";
import Favorite from "./component/Favorite/index";
import Navigation from "./component/Navigation/index";
import MovieDetails from "./component/MovieDetails/index";
import "bootstrap/dist/css/bootstrap.min.css";

// import logo from "./logo.svg";
import "./App.css";

function App() {
  console.log("Appp");
  return (
    <Router>
      {<Navigation />}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/favorites" element={<Favorite />}></Route>
        <Route path="/details/:id" element={<MovieDetails />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
