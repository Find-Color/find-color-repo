import { useState, useEffect, useContext, Fragment } from "react";
import { getPost } from "../adapters/post-adapter";
import { useParams, useNavigate } from "react-router-dom";
import { checkForLoggedInUser } from "../adapters/auth-adapter";
import CommentsMissingPerson from "../components/CommentsMissingPerson";
import { getAllCommentsFromPost } from "../adapters/comment-adapter";
import { Button, Typography } from "@material-tailwind/react";
import TimeAgo from "react-timeago";
import frenchStrings from "react-timeago/lib/language-strings/fr";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import CurrentUserContext from "../contexts/current-user-context";

const formatter = buildFormatter(frenchStrings);

export default function MissingPerson() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [missing, setMissing] = useState("");
  const [loggedIn, setLoggedIn] = useState(null);
  const [comments, setComments] = useState([]);
  const [tabBool, setTabBool] = useState(true);
  const { currentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    getPost(id).then((res) => setMissing(res[0]));
    checkForLoggedInUser().then((data) => {
      setLoggedIn(data);
    });
    getAllCommentsFromPost(id).then(setComments);
  }, [id]);

  const addComment = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  function handleClick() {
    navigate(`/missing_person_update/${id}`);
  }

  const handleDescription = () => {
    !tabBool ? setTabBool(true) : setTabBool(false);
  };

  if (!missing) return <div>Loading...</div>;

  return (
    <>
      <div id="missingPersonInfoParent">
        <section className="missingPersonInfoOne">
          <Typography variant="h1">{missing.name}</Typography>
          <br />
          <Typography variant="h3">Status: {missing.status}</Typography>
          <br />
          <Typography variant="h6">
            Last Seen in {missing.location_state}
          </Typography>
          <Typography variant="h6">Age: {missing.age} y/o</Typography>
          <Typography variant="h6">Hair: {missing.hair}</Typography>
          <Typography variant="h6">
            Height: {convertInchesToFeetAndInches(missing.height)}
          </Typography>
          <Typography variant="h6">Eye Color: {missing.eye_color}</Typography>
          <Typography variant="h6">Weight: {missing.weight} lbs</Typography>
          <Typography variant="h6">Nationality: {missing.ethnicity}</Typography>
          <Typography variant="h6">Gender: {missing.gender}</Typography>
          {currentUser?.user_id == missing.user_id && (
            <Button className="editForm" color="red" onClick={handleClick}>
              Edit Form
            </Button>
          )}
        </section>

        <section className="missingPersonInfoTwo">
          <img
            src={missing.image_post}
            alt=""
            className="missingPersonPhoto"
          />
          <Typography variant="small" id="dateAndContact">
            Date Reported:
            <strong>
              {" " + missing.date_reported.slice(0, 10) + " "}(
              <TimeAgo date={missing.date_reported} />)
            </strong>
          </Typography>
          <Typography variant="paragraph" id="dateAndContact">
            Contact Info: {missing.contact_info}
          </Typography>
        </section>

        <section className="missingPersonInfoThree">
          <div id="decriptionCommentButtonParent">
            <Button
              id="decriptionCommentButton"
              color="amber"
              variant="text"
              onClick={handleDescription}
            >
              Description
            </Button>
            <Button
              id="decriptionCommentButton"
              color="amber"
              variant="text"
              onClick={handleDescription}
            >
              Comments
            </Button>
          </div>
          {tabBool ? (
            <Typography className="missingPersonText" variant="small">{missing.description_text}</Typography>
          ) : (
            <CommentsMissingPerson
              comments={comments}
              username={currentUser?.username}
              addComment={addComment} // Pass the function to the child component
            />
          )}
        </section>
      </div>
    </>
  );
}

function convertInchesToFeetAndInches(inches) {
  // if (typeof inches !== "number" || isNaN(inches)) {
  //   return "Invalid input. Please provide a valid number of inches.";
  // }

  if (inches < 0) {
    return "Input value must be a positive number.";
  }

  const feet = Math.floor(inches / 12);
  const remainingInches = inches % 12;

  return `${feet}' ${remainingInches}"`;
}
