// import Button from "./Button";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { checkForLoggedInUser } from "../adapters/auth-adapter";
import CommentModalDMMY from "./CommentModalDMMY";
import {
  toggleUpvote,
  getAllUpvotesFromPost,
} from "../adapters/upvote-adapter";

export default function MissingPersonCard({ name, location_state, status, post_id, image }) {
  const [modalShow, setModalShow] = useState(false);
  const [upVoteCount, setUpVoteCount] = useState([]);
  const [loggedIn, setLoggedIn] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    checkForLoggedInUser().then(data => {
      setLoggedIn(data);
      console.log(image)
    });
    getAllUpvotesFromPost(post_id).then(setUpVoteCount);
  }, []);
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/post/${post_id}`);
  }
  async function handleUpVote(post_id) {
    const user_id = loggedIn.id;
    await toggleUpvote(user_id, post_id);
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
        <img src={image} alt="missing" />
        <h3>Name: {name}</h3>
        <h4>Last Seen: {location_state}</h4>
        <h5>Status: {status}</h5>
        <h5>Up Votes: {upVoteCount.length}</h5>
        <h4 className="seeMoreButton" onClick={handleClick}>
          See More
        </h4>
      </Card.Body>
      <Button
        className="cardButton"
        variant="warning"
        onClick={() => handleUpVote(post_id)}
      >
        Up Vote
      </Button>
      <br />
      <Button
        onClick={() => setModalShow(true)}
        variant="warning"
        className="cardButton"
      >
        Comment
      </Button>
      <br />
      <CommentModalDMMY
        show={modalShow}
        onHide={() => setModalShow(false)}
        post_id={post_id}
      />
    </Card>
  );
}
