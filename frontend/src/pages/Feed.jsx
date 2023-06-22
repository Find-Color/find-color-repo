import MissingPersonCard from "../components/missingPersonCard";
import MissingPeopleList from "../components/MissingPeopleList";
import Filter from "../components/Filter";
import { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Accordion from "react-bootstrap/Accordion";
import PostContext from "../contexts/PostContext";

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
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Filters</Accordion.Header>
          <Accordion.Body>
            <Filter />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/* <p>
        {selectStatus}, {selectEthnicity},{selectGender}, {selectAge}
      </p> */}
      <MissingPeopleList />
    </>
  );
}
