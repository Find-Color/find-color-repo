import { useState, useEffect, useContext } from "react";
import { useState, useEffect, useContext } from "react";
import { getPost } from "../adapters/post-adapter";
import { useParams, useNavigate } from "react-router-dom";
// import { UserContext } from "./contexts/current-user-context";
import { checkForLoggedInUser } from "../adapters/auth-adapter";
import Comments from "../components/Comments";

export default function MissingPerson() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [missing, setMissing] = useState("");
  const [loggedIn, setLoggedIn] = useState(null);
  //   const user = useContext(UserContext);
  useEffect(() => {
    getPost(id).then((res) => setMissing(res[0]));
    checkForLoggedInUser().then((data) => {
      setLoggedIn(data);
    });
  }, [id]);
  function handleClick() {
    navigate(`/missing_person_update/${id}`);
  }

  if (!missing) return <div>Loading...</div>;

  return (
    <>
      {!loggedIn ? <></> : <button onClick={handleClick}>Edit Form</button>}
      <h2>Status: {missing.status}</h2>
      <h6>Last Seen in: {missing.location}</h6>
      <h3>Name: {missing.name}</h3>
      <h5>Age: {missing.age}</h5>
      <h5>Hair: {missing.hair}</h5>
      <h5>Height: {missing.height}</h5>
      <h5>Eye Color: {missing.eye_color}</h5>
      <h5>Weight: {missing.weight}</h5>
      <h6>Nationality: {missing.ethnicity}</h6>
      <h6>Race: {missing.race}</h6>
      <h6>Gender: {missing.gender}</h6>
      <img src={missing.image} alt="" />
      <h6>About Them: {missing.description_text}</h6>
      <h6>Date Reported: {missing.date_reported}</h6>
      <p>Contact Info: {missing.contact_info}</p>
      <Comments />
    </>
  );
}
