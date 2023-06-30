import MissingPeopleList from "../components/MissingPeopleList";
import Filter from "../components/filter";
import { useContext, useEffect, useState, Fragment } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import PostContext from "../contexts/PostContext";
import TuneIcon from "@mui/icons-material/Tune";
import CurrentUserContext from "../contexts/current-user-context";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  AccordionItem,
  Typography,
} from "@material-tailwind/react";

export default function Feed() {
  const [open, setOpen] = useState(1);
  const { currentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const handleOpen = value => {
    setOpen(open === value ? 0 : value);
  };

  const handleFormRoute = () => {
    navigate("/missing_person");
  };
  return (
    <Fragment id="feedParent">
      {currentUser && (
        <Button
          onClick={handleFormRoute}
          color="amber"
          className="mt-4 mb-2 ml-2 newPostButton"
        >
          New Post
        </Button>
      )}
      <Typography variant="h2" className="flex items-center justify-center">
        Missing People
      </Typography>
      <Accordion open={open === 2} className="mt-4 mb-2 ml-2 ">
        <AccordionHeader onClick={() => handleOpen(2)} id="filterText">
          <div className="flex content-center">
            <TuneIcon
              fontSize="medium"
              className="self-center mx-2"
            />
            <Typography variant="h4" className="self-center">
              Filters
            </Typography>
          </div>
        </AccordionHeader>
        <AccordionBody>
          <Filter />
        </AccordionBody>
      </Accordion>
      <MissingPeopleList />
    </Fragment>
  );
}
