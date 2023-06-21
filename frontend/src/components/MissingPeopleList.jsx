import MissingPersonCard from "./missingPersonCard";
import { useState, useEffect, useContext } from "react";
import PostContext from "../contexts/PostContext";

export default function MissingPeopleList() {
  const { posts } = useContext(PostContext);
  console.log(posts);

  return (
    <>
      <div className="ui centered cards missing-people-container">
        {posts.map((person, i) => {
          return <MissingPersonCard key={i} {...person} />;
        })}
      </div>
    </>
  );
}
