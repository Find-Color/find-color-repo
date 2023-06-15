import MissingPersonCard from "./missingPersonCard";
import { getAllPosts } from "../adapters/post-adapter";
import { useState, useEffect } from "react";

export default function MissingPeopleList() {
  const [posts, setPosts] = useState([]);
  console.log(posts)

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

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
