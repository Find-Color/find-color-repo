import MissingPersonCard from "../components/missingPersonCard";
import MissingPeopleList from "../components/MissingPeopleList";
import Filter from "../components/filter";
import { useContext, useEffect, useState, Fragment } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import PostContext from "../contexts/PostContext";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  AccordionItem,
  Typography
} from "@material-tailwind/react";

export default function Feed() {
  const [open, setOpen] = useState(1);
  const navigate = useNavigate();
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const handleFormRoute = () => {
    navigate("/missing_person");
  };
  return (
    <Fragment>
      <>
        <Button onClick={handleFormRoute} color="amber" className="mt-4 mb-2 ml-2">New Post</Button>
      </>
      <Typography variant="h2" className="flex items-center justify-center">Missing People</Typography>
      <Accordion open={open === 2} className="mt-4 mb-2 ml-2" >
        <AccordionHeader onClick={() => handleOpen(2)} color="amber">Filters</AccordionHeader>
        <AccordionBody>
          <Filter />
        </AccordionBody>
      </Accordion>
      {/* <p>
        {selectStatus}, {selectEthnicity},{selectGender}, {selectAge}
      </p> */}
      <MissingPeopleList />
    </Fragment>
  );
}
