import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { checkForLoggedInUser } from "../adapters/auth-adapter";
import CommentModalDMMY from "./CommentModalDMMY";
import TimeAgo from "react-timeago";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PanToolAltIcon from "@mui/icons-material/PanToolAlt";
import ChatIcon from "@mui/icons-material/Chat";
import { createTheme } from "@mui/material/styles";
import CurrentUserContext from "../contexts/current-user-context";

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
  date_reported,
  username,
}) {
  const bookmarked = false; //this will be removed once there is context (false by default)
  const [upVoteCount, setUpVoteCount] = useState([]);
  const [loggedIn, setLoggedIn] = useState(null);
  const [upVoteBool, setUpVoteBool] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [counter, setCounter] = useState(upVoteCount.length);
  const [bookmark, setBookmark] = useState(bookmarked);
  const { currentUser } = useContext(CurrentUserContext);

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
    checkForLoggedInUser().then(data => {
      setLoggedIn(data);
    });
    getAllUpvotesFromPost(post_id).then(setUpVoteCount);
    setCounter(upVoteCount.length);
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

  const handleBookmark = () => {
    //do the toggling here
    if (bookmark) {
      setBookmark(false);
    } else {
      setBookmark(true);
    }
  };

  return (
    <Card
      className="mt-10 w-96 pt-10 pr-2 pl-2 ml-10 mr-10 hover:outline-double hover:outline-amber-500"
      onClick={handleClick}
      id="card-style"
    >
      <div class="flex justify-between">
        <div className="cardHeaderText">
          <Typography variant="h4">{name}</Typography>
          <Typography variant="h6">
            Posted By: {username}
            <br />
            <TimeAgo date={date_reported} />
          </Typography>
        </div>
        <div onClick={e => e.stopPropagation()}>
          {bookmark ? (
            <BookmarkIcon
              variant="outline"
              fontSize="large"
              color="on"
              onClick={handleBookmark}
            />
          ) : (
            <BookmarkBorderIcon
              variant="outline"
              fontSize="large"
              color="on"
              onClick={handleBookmark}
            />
          )}
        </div>
      </div>
      <br />
      <CardHeader className="relative h-80">
        <img className="h-full w-full" src={image_post} alt="missing" />
      </CardHeader>
      <CardBody>
        <Typography variant="h4">Last Seen in {location_state}</Typography>
        <Typography variant="h6">Status: {status}</Typography>
        <Typography variant="h6">Up Votes: {counter}</Typography>
      </CardBody>
      {currentUser && (
        <>
          <CardFooter
            className="pt-0"
            onClick={e => e.stopPropagation()}
            id="footerCardButtons"
          >
            <Button
              className="cardButton"
              onClick={() => handleUpVote(post_id)}
              color="red"
            >
              <PanToolAltIcon fontSize="medium" />
            </Button>
            <Button
              onClick={handleOpenDialog}
              className="cardButton"
              color="red"
            >
              <ChatIcon fontSize="medium" />
            </Button>
          </CardFooter>
          <CommentModalDMMY
            showDialog={showDialog}
            handleCloseDialog={handleCloseDialog}
            post_id={post_id}
          />
        </>
      )}
    </Card>
  );
}
