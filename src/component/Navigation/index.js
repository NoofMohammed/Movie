// import Button from "@restart/ui/esm/Button";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./navigation.css";

const Navigation = () => {
  const [favorite, setFavorite] = useState();
  useEffect(() => {
    let idArray = JSON.parse(localStorage.getItem("my_favorite"));
    console.log(idArray, "ia");
    setFavorite(idArray.length);
  }, []);

  return (
    <>
      <div className="navigation">
        <Link className="buttonNav" to="/">
          <Button variant="primary">Home</Button>
        </Link>
        <Link to="/favorites">
          <Button variant="warning" className="favorite">
            Favorites
            <span className="badge badge-light">{favorite}</span>
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Navigation;
