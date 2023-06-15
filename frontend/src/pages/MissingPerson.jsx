import { useState, useEffect } from "react";
import { getPost } from "../adapters/post-adapter";
import { useParams } from "react-router-dom";

export default function MissingPerson() {
  let { id } = useParams();
  console.log(id);
  const [missing, setMissing] = useState([]);
  useEffect(() => {
    getPost(id).then(setMissing);
  }, []);
  console.log(missing);
  let [person, ignore] = missing;



  return (
    <>
      {/* <h2>Status: {person.status}</h2>
      <h3>Name: {person.name}</h3>
      <h5>Age: {person.age}</h5>
      <h5>Hair: {person.hair}</h5>
      <h5>Height: {person.height}</h5>
      <h5>Eye Color: {person.eye_color}</h5>
      <h5>Weight: {person.weight}</h5>
      <h6>Nationality: {person.ethnicity}</h6>
      <h6>Race: {person.race}</h6>
      <h6>Gender: {person.gender}</h6>
      <img src={person.image} alt="" />
      <h6>About Them: {person.description_text}</h6>
      <h6>Date Reported: {person.date_reported}</h6>
      <p>Contact Info: {person.contact_info}</p> */}
    </>
  );
}
