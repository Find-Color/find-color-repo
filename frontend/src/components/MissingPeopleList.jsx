import MissingPersonCard from "./missingPersonCard";
import { getAllPosts } from "../adapters/post-adapter";
import { useState, useEffect } from "react";
import { getAllUpvotesFromPost } from "../adapters/upvote-adapter";

export default function MissingPeopleList() {
  const { posts, filteredResults } = useContext(PostContext);
  const values = filteredResults ? filteredResults : posts;
  return (
    <>
      <div className="ui centered cards missing-people-container">
        {values.map((person, i) => {
          return <MissingPersonCard key={person.post_id} {...person} />;
        })}
      </div>
    </>
  );
}
