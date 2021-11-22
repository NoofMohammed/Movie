// import Button from "@restart/ui/esm/Button";
import { React } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Navigation = () => {
  console.log(5555555555555555555);
  return (
    <>
      <div className="navigation">
        <Link className="buttonNav" to="/">
          <Button variant="primary">Home</Button>
        </Link>
        <Link to="/favorites">
          <Button variant="warning">Favorites</Button>
        </Link>
      </div>
    </>
  );
};

export default Navigation;
