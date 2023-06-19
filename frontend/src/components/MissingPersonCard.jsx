// import Button from "./Button";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import CommentModalDMMY from "./CommentModalDMMY";

export default function MissingPersonCard({ name, location, status, post_id }) {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/post/${post_id}`);
  }
  return (
    <Card
      className="ui card"
      id="personCard"
      bg="dark"
      text="light"
      style={{ width: "18rem" }}
    >
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <h3>Name: {name}</h3>
        <h4>Last Seen: {location}</h4>
        <h5>Status: {status}</h5>
        <h4 className="seeMoreButton" onClick={handleClick}>
          See More
        </h4>
      </Card.Body>
      <Button className="cardButton" variant="warning">Up Vote</Button>
      <br />
      <Button
        onClick={() => setModalShow(true)}
        variant="warning"
        className="cardButton"
      >
        Comment
      </Button>
      <br />
      <CommentModalDMMY show={modalShow} onHide={() => setModalShow(false)} />
    </Card>
  );
}
