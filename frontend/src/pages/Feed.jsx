import MissingPersonCard from "../components/missingPersonCard";
import MissingPeopleList from "../components/MissingPeopleList";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

export default function Feed() {
  const navigate = useNavigate();
  const handleFormRoute = ()=>{navigate('/missing_person')}
  return (
    <>
      <>
      <Button onClick={handleFormRoute} variant="danger">New Post</Button>
      </>
      <MissingPeopleList />
    </>
  );
}
