import MissingPersonCard from "../components/missingPersonCard";
import MissingPeopleList from "../components/MissingPeopleList";
import Button from "react-bootstrap/esm/Button";
import Filter from "../components/filter";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CloudinaryUpload from "../components/CloudinaryUpload";
export default function Feed() {
  const [filterBool, setFilterBool] = useState(false);
  const navigate = useNavigate();
  const handleFormRoute = () => {
    navigate("/missing_person");
  };
  return (
    <>
      <Button
        onClick={() => {
          !filterBool ? setFilterBool(true) : setFilterBool(false);
        }}
      ></Button>
      {filterBool ? <Filter /> : <></>}
      <>
        <Button onClick={handleFormRoute} variant="danger">
          New Post
        </Button>
      </>
      <MissingPeopleList />
    </>
  );
}
