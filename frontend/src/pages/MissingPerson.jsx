import { useState, useEffect } from "react";
import { getPost } from "../adapters/post-adapter";
import { useParams } from "react-router-dom";

export default function MissingPerson() {
  const { id } = useParams();

  const [missing, setMissing] = useState(null);
  useEffect(() => {
    getPost(id).then(res => setMissing(res[0]));
  }, [id]);

  console.log(missing);

  if (!missing) return <div>Loading...</div>

  return (
    <>
      <h2>Status: {missing.status}</h2>
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
    </>
  );
}
