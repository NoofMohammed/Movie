// import Button from "@restart/ui/esm/Button";
import { React } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./navigation.css";

const Navigation = () => {
  const counter = () => {
    let idArray = JSON.parse(localStorage.getItem("my_favorite"));
    let count;

    if (!idArray) {
      count = 0;
    } else {
      count = idArray.length;
    }
    return count;
  };

  console.log(5555555555555555555);
  return (
    <>
      <div className="navigation">
        <Link className="buttonNav" to="/">
          <Button variant="primary">Home</Button>
        </Link>
        <Link to="/favorites">
          <Button variant="warning">
            Favorites
            <span className="badge badge-light">{counter()}</span>
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Navigation;
