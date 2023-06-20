// import { fetchHandler, getPostOptions } from "../utils";
import { createComment } from "../adapters/comment-adapter";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { checkForLoggedInUser } from "../adapters/auth-adapter";
import { useParams } from "react-router-dom";

export default function CommentModalDMMY(props) {
  const [commentText, setCommentText] = useState("");
  const [loggedIn, setLoggedIn] = useState(null);
  
  useEffect(() => {
    checkForLoggedInUser().then((data) => {
      setLoggedIn(data);
    });
  }),[];

  const modalStyle = {
    backgroundColor: "black", // Background color for the modal
    color: "white", // Text color for the modal
  };
  const handleComment = (event) => {
    setCommentText(event.target.value);
  };
  const sendComment = () => {
    let post_id = props.post_id;
    let id = loggedIn.id;
    let data = { commentText, post_id, id };
    console.log(data);
    createComment(data).then(console.log(data))
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
