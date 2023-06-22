import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { createComment } from "../adapters/comment-adapter";
import { useEffect, useState, useContext } from "react";
import { checkForLoggedInUser } from "../adapters/auth-adapter";
import { useParams, useNavigate } from "react-router-dom";
import CommentCard from "./CommentCard";

export default function CommentsMissingPerson({ comments }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [comment, setComments] = useState(comments);
  const [commentText, setCommentText] = useState("");
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    checkForLoggedInUser().then(data => {
      setLoggedIn(data);
    });
  }, [commentText, comment]);

  // Helper functions for Comments
  const handleComment = event => {
    setCommentText(event.target.value);
  };
  const sendComment = async e => {
    e.preventDefault();
    let post_id = id;
    let user_id = loggedIn.id;
    const body = {
      post_id: post_id,
      user_id: user_id,
      comment_text: commentText,
    };

    await createComment(body);

    // Update the comments state with the new comment
    setComments(prevComments => [...prevComments, body]);

    // Clear the comment text input
    setCommentText("");
  };

  return (
    <>
      <Form style={{ width: "50%" }} onChange={handleComment}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Comments</Form.Label>
          <ul>
            {comments.map((comment, i) => {
              return (
                <CommentCard key={i} comment_text={comment.comment_text} />
              );
            })}
          </ul>
          <Form.Control
            type="text"
            placeholder="Make a Comment"
            value={commentText}
            onChange={e => setCommentText(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Button variant="warning" onClick={sendComment}>
          Submit
        </Button>
      </Form>
    </>
  );
}
