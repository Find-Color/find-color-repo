import MissingPersonCard from "../components/missingPersonCard";
import MissingPeopleList from "../components/MissingPeopleList";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Feed() {
  return (
    <>
      <>
        <NavLink to="/missing_person">New Post</NavLink>
      </>
      <MissingPeopleList />
    </>
  );
}
