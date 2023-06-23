import { createComment } from "../adapters/comment-adapter";
import { useEffect, useState, Fragment } from "react";
import { checkForLoggedInUser } from "../adapters/auth-adapter";
import { useNavigate } from "react-router-dom";
import {
  Textarea,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function CommentModalDMMY({
  showDialog,
  handleCloseDialog,
  post_id,
}) {
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
    // let post_id = post_id;
    let user_id = loggedIn.id;
    const body = {
      post_id: post_id,
      user_id: user_id,
      comment_text: commentText,
    };
    await createComment(body);
    navigate(`/post/${post_id}`);
  };

  return (
    <Fragment>
      <Dialog open={showDialog} handler={handleCloseDialog}>
        <DialogHeader>User Name</DialogHeader>
        <DialogBody divider>
          <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
              Make a comment
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              We recommend kind words or whereabouts of the person
            </Typography>
            <form
              className="mt-10 mb-4 w-80 max-w-screen-lg sm:w-96"
              onChange={handleComment}
            >
              <div className="mb-4 flex flex-col gap-6">
                <div className="w-90">
                  <Textarea label="Message" />
                </div>
              </div>
              <Button
                className="mt-6"
                fullWidth
                onClick={sendComment}
                color="red"
              >
                Send
              </Button>
            </form>
          </Card>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleCloseDialog}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          {/* <Button variant="gradient" color="red" onClick={handleCloseDialog}>
            <span>Confirm</span>
          </Button> */}
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}

{
  /* <Button variant="warning" onClick={sendComment}>
Send
</Button>
<Button onClick={props.onHide} variant="warning">
Close
</Button> */
}
