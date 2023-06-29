import { Textarea, Button, IconButton, Form } from "@material-tailwind/react";
import { createComment } from "../adapters/comment-adapter";
import { useEffect, useState, useContext, Fragment } from "react";
import { checkForLoggedInUser } from "../adapters/auth-adapter";
import { useParams, useNavigate } from "react-router-dom";
import CommentCard from "./CommentCard";
import CurrentUserContext from "../contexts/current-user-context";

export default function CommentsMissingPerson({
  comments,
  username,
  addComment,
}) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [comment, setComments] = useState(comments);
  const [commentText, setCommentText] = useState("");
  const [loggedIn, setLoggedIn] = useState(null);
  const { currentUser } = useContext(CurrentUserContext);
  useEffect(() => {
    checkForLoggedInUser().then((data) => {
      setLoggedIn(data);
    });
  }, [commentText, comment]);

  // Helper functions for Comments
  const handleComment = (event) => {
    let value = event.target.value;
    setCommentText(value);
  };

  const sendComment = async (e) => {
    e.preventDefault();
    let post_id = id;
    let user_id = currentUser?.user_id;
    const body = {
      post_id: post_id,
      user_id: user_id,
      comment_text: commentText,
    };

    // Create the comment
    const newComment = await createComment(body);
    // Update the comments state with the new comment
    body.username = currentUser?.username;
    addComment(body);
    setComments((prevComments) => [...prevComments, body]);
    // Clear the comment text input
    setCommentText("");
  };

  return (
    <Fragment>
      <div className="max-h-60 overflow-y-auto">
        <ul>
          {comments.map((comment, i) => {
            return (
              <CommentCard
                key={i}
                username={comment.username}
                comment_text={comment.comment_text}
              />
            );
          })}
        </ul>
      </div>
      <br />
      <div className="flex w-96 flex-col gap-6">
        <Textarea
          color="gray-50"
          className="text-white"
          inputClass="text-white"
          label="Comment"
          rows={2}
          value={commentText}
          onChange={handleComment}
        />

        <div className="w-full py-1.5" id="missingPersonCardCommentButton">
          <div className="flex justify-center gap-6">
            <Button
              size="sm"
              color="red"
              variant="text"
              className="rounded-md"
              id="personComment"
            >
              Cancel
            </Button>
            <Button
              id="personComment"
              size="lg"
              className="rounded-md w-90"
              color="red"
              onClick={sendComment}
            >
              Post Comment
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
