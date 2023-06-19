import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function CommentsMissingPerson() {
  return (
    <>
      <h3>Comments</h3>
      {/* Comments map will go here! */}
      <Form style={{ width: '50%' }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Comment</Form.Label>
          <Form.Control type="text" placeholder="Make a Comment" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Button variant="warning" type="submit" onSubmit={()=>{}}>
          Submit
        </Button>
      </Form>
    </>
  );
}
