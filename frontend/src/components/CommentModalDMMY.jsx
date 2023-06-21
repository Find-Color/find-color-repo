import { createComment } from "../adapters/comment-adapter";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { checkForLoggedInUser } from "../adapters/auth-adapter";
import { useParams, useNavigate } from "react-router-dom";

export default function CommentModalDMMY(props) {
  const navigate = useNavigate();
  const [commentText, setCommentText] = useState("");
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    checkForLoggedInUser().then((data) => {
      setLoggedIn(data);
    });
  }, []);

  const handleComment = (event) => {
    setCommentText(event.target.value);
  };
  const sendComment = async (e) => {
    e.preventDefault();
    let post_id = props.post_id;
    let user_id = loggedIn.id;
    const body = {
      post_id: post_id,
      user_id: user_id,
      comment_text: commentText,
    };
    await createComment(body);
    navigate(`/post/${post_id}`);
  };

  const modalStyle = {
    backgroundColor: "black", // Background color for the modal
    color: "white", // Text color for the modal
  };
  return (
    <Modal
      className="modal"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        style={{ backgroundColor: "black", color: "white" }}
      >
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ backgroundColor: "black", color: "white" }}
        >
          Make a Comment
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "black", color: "white" }}>
        <h4>Centered Modal</h4>

        <Form.Group
          style={{ backgroundColor: "black", color: "white" }}
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label style={{ backgroundColor: "black", color: "white" }}>
            Example textarea
          </Form.Label>
          <Form.Control
            onChange={handleComment}
            as="textarea"
            rows={3}
            style={{ backgroundColor: "black", color: "white" }}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "black", color: "white" }}>
        <Button variant="warning" onClick={sendComment}>
          Send
        </Button>
        <Button onClick={props.onHide} variant="warning">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
