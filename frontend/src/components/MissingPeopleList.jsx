import MissingPersonCard from "./MissingPersonCard";
import { useState, useEffect, useContext } from "react";
import PostContext from "../contexts/PostContext";

export default function MissingPeopleList() {
  const { posts, filteredResults } = useContext(PostContext);
  const values = filteredResults ? filteredResults : posts;
  return (
    <>
      <div className="ui centered cards missing-people-container" id="missingPersonCardParent">
        {values.map((person, i) => {
          return <MissingPersonCard key={person.post_id} {...person} />;
        })}
      </div>
    </>
  );
}
