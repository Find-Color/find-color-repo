import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { checkForLoggedInUser } from "../adapters/auth-adapter";
import CommentModalDMMY from "./CommentModalDMMY";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import {
  toggleUpvote,
  getAllUpvotesFromPost,
} from "../adapters/upvote-adapter";

export default function MissingPersonCard({
  name,
  location_state,
  status,
  post_id,
  image_post,
}) {
  const [modalShow, setModalShow] = useState(false);
  const [upVoteCount, setUpVoteCount] = useState([]);
  const [loggedIn, setLoggedIn] = useState(null);
  const [size, setSize] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  

  const toggleDialog = () => {
    setShowDialog(!showDialog);
  };

  const handleOpenDialog = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  const { id } = useParams();

  useEffect(() => {
    checkForLoggedInUser().then((data) => {
      setLoggedIn(data);
      console.log(image_post);
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
    <Card className="mt-6 w-96 pt-6 pr-2 pl-2">
      <CardHeader color="blue-gray" className="relative h-70">
        <img src={image_post} alt="missing" layout="fill" />
      </CardHeader>
      <CardBody>
        <h3>Name: {name}</h3>
        <h4>Last Seen: {location_state}</h4>
        <h5>Status: {status}</h5>
        <h5>Up Votes: {upVoteCount.length}</h5>
        <br />
        <h4 className="seeMoreButton" onClick={handleClick}>
          See More
        </h4>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          className="cardButton"
          onClick={() => handleUpVote(post_id)}
          color="red"
        >
          Up Vote
        </Button>
        <br />
        <br />
        <Button onClick={handleOpenDialog} className="cardButton" color="red">
          Comment
        </Button>
      </CardFooter>
      <CommentModalDMMY
        showDialog={showDialog}
        handleCloseDialog={handleCloseDialog}
        post_id={post_id}
      />
    </Card>
  );
}
