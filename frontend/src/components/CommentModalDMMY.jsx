import Button from "react-bootstrap/Button";
import { Modal } from 'react-bootstrap';
// import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { useState } from "react";

export default function CommentModalDMMY(props) {
  const [commentText, setCommentText] = useState("");
  const modalStyle = {
    backgroundColor: "black", // Background color for the modal
    color: "white", // Text color for the modal
  };
  const handleComment = (event) => {
    setCommentText(event.target.value);
    console.log(commentText);
  };
  return (
    <Modal
    
      className="modal"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{backgroundColor: "black", color: "white"}}>
        <Modal.Title id="contained-modal-title-vcenter"  style={{backgroundColor: "black", color: "white"}}>
          Make a Comment
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{backgroundColor: "black", color: "white"}}>
        <h4>Centered Modal</h4>

        <Form.Group
        style={{backgroundColor: "black", color: "white"}}
          onChange={handleComment}
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label style={{backgroundColor: "black", color: "white"}}>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} style={{backgroundColor: "black", color: "white"}}/>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer style={{backgroundColor: "black", color: "white"}}>
        <Button onClick={props.onHide} variant="warning">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
