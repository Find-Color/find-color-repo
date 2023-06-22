import { useState, useEffect, useContext } from "react";
import { getPost } from "../adapters/post-adapter";
import { useParams, useNavigate } from "react-router-dom";
import { checkForLoggedInUser } from "../adapters/auth-adapter";
import CommentsMissingPerson from "../components/CommentsMissingPerson";
import { getAllCommentsFromPost } from "../adapters/comment-adapter";

export default function MissingPerson() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [missing, setMissing] = useState("");
  const [loggedIn, setLoggedIn] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getPost(id).then(res => setMissing(res[0]));
    checkForLoggedInUser().then(data => {
      setLoggedIn(data);
    });
    getAllCommentsFromPost(id).then(setComments);
  }, [id]);
  function handleClick() {
    navigate(`/missing_person_update/${id}`);
  }

  if (!missing) return <div>Loading...</div>;

  return (
    <>
      {!loggedIn ? <></> : <button onClick={handleClick}>Edit Form</button>}
      <h2>Status: {missing.status}</h2>
      <h6>Last Seen in: {missing.location_state}</h6>
      <h3>Name: {missing.name}</h3>
      <h5>Age: {missing.age}</h5>
      <h5>Hair: {missing.hair}</h5>
      <h5>Height: {convertInchesToFeetAndInches(missing.height)}</h5>
      <h5>Eye Color: {missing.eye_color}</h5>
      <h5>Weight: {missing.weight}</h5>
      <h6>Nationality: {missing.ethnicity}</h6>
      <h6>Gender: {missing.gender}</h6>
      <img src={missing.image} alt="" />
      <section>
        <CommentsMissingPerson comments={comments} />
        <h6>About Them: {missing.description_text}</h6>
        <CommentsMissingPerson comments={comments} />
      </section>
      <section>
        <h6>Date Reported: {missing.date_reported}</h6>
        <p>Contact Info: {missing.contact_info}</p>
      </section>
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
