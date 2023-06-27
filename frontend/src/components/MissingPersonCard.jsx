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
  Typography,
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
  date_reported
}) {
  const [upVoteCount, setUpVoteCount] = useState([]);
  const [loggedIn, setLoggedIn] = useState(null);
  const [upVoteBool, setUpVoteBool] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [counter, setCounter] = useState(upVoteCount.length);

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
    setCounter(upVoteCount.length);
    console.log(counter);
  }, [upVoteCount.length]);

  const navigate = useNavigate();

  function handleClick() {
    navigate(`/post/${post_id}`);
  }

  async function handleUpVote(post_id) {
    if (!upVoteBool) {
      setUpVoteCount(counter + 1);
      setUpVoteBool(true);
    } else {
      setUpVoteCount(counter - 1);
      setUpVoteBool(false);
    }

    const user_id = loggedIn.user_id;
    await toggleUpvote(user_id, post_id);
  }

  return (
    <Card className="mt-10 w-96 pt-10 pr-2 pl-2 ml-10 mr-10" id="card-style">
      <Typography variant="h4" className="cardHeaderText">
        {name} 
      </Typography>
      <CardHeader className="relative h-80">
        <img className="h-full w-full" src={image_post} alt="missing" />
      </CardHeader>
      <CardBody>
        <Typography variant="h4">Last Seen in {location_state}</Typography>
        <Typography variant="h6">Status: {status}</Typography>
        <Typography variant="h6">Up Votes: {counter}</Typography>
        <Typography variant="h5" className="seeMoreButton" onClick={handleClick}>
          See More
        </Typography>
      </CardBody>
      <CardFooter className="pt-0" id="footerCardButtons">
        <Button
          className="cardButton"
          onClick={() => handleUpVote(post_id)}
          color="red"
        >
          Up Vote
        </Button>
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
