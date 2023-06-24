import MissingPersonCard from "./missingPersonCard";
import { getAllPosts } from "../adapters/post-adapter";
import { useState, useEffect, useContext } from "react";
import PostContext from "../contexts/PostContext";
import { getAllUpvotesFromPost } from "../adapters/upvote-adapter";

export default function MissingPeopleList() {
  const { posts, filteredResults } = useContext(PostContext);
  const values = filteredResults ? filteredResults : posts;
  console.log(values);
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
