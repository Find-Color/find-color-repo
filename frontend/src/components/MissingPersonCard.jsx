// import Button from "./Button";
import Button from "react-bootstrap/Button";
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
    <div className="ui card">
      <img src="" alt="" />
      
      <h3>Name: {name}</h3>
      <h4>Last Seen: {location}</h4>
      <h5>Status: {status}</h5>
      <h4 className="seeMoreButton" onClick={handleClick}>
        See More
      </h4>
      <Button onClick={() => setModalShow(true)}></Button>
      <CommentModalDMMY show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
