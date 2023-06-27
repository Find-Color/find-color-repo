import { useState, useEffect, useContext, Fragment } from "react";
import { getPost } from "../adapters/post-adapter";
import { useParams, useNavigate } from "react-router-dom";
import { checkForLoggedInUser } from "../adapters/auth-adapter";
import CommentsMissingPerson from "../components/CommentsMissingPerson";
import { getAllCommentsFromPost } from "../adapters/comment-adapter";
import { Button, Typography } from "@material-tailwind/react";

export default function MissingPerson() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [missing, setMissing] = useState("");
  const [loggedIn, setLoggedIn] = useState(null);
  const [comments, setComments] = useState([]);
  const [tabBool, setTabBool] = useState(true);

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
  console.log(comments);
  // if(missing.height )
  return (
    <>
      <div id="missingPersonInfoParent">
        <section className="missingPersonInfoOne">
          <Typography variant="h1">{missing.name}</Typography>
          <br />
          <Typography variant="h3">Status: {missing.status}</Typography>
          <br />
          <Typography>Last Seen in: {missing.location_state}</Typography>
          <h5>Age: {missing.age}</h5>
          <h5>Hair: {missing.hair}</h5>
          <h5>Height: {convertInchesToFeetAndInches(missing.height)}</h5>
          <h5>Eye Color: {missing.eye_color}</h5>
          <h5>Weight: {missing.weight}</h5>
          <Typography>Nationality: {missing.ethnicity}</Typography>
          <Typography>Gender: {missing.gender}</Typography>
          {!loggedIn ? (
            <></>
          ) : (
            <Button className="editForm" color="red" onClick={handleClick}>
              Edit Form
            </Button>
          )}
        </section>

        <section className="missingPersonInfoTwo">
          <img
            src={missing.image_post}
            alt=""
            className=" h-80 w-80 rounded-lg"
          />
          <Typography variant="small" id="dateAndContact">
            Date Reported: {missing.date_reported}
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
            <Typography variant="small">{missing.description_text}</Typography>
          ) : (
            <CommentsMissingPerson
              comments={comments}
              username={loggedIn.username}
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
