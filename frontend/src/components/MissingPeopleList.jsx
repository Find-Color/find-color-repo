import MissingPersonCard from "./missingPersonCard";
import { getAllPosts } from "../adapters/post-adapter";
import { useState, useEffect } from "react";
import { getAllUpvotesFromPost } from "../adapters/upvote-adapter";

export default function MissingPeopleList() {
  const [posts, setPosts] = useState([]);
  const [upVoteCount, setUpVoteCount] = useState([]);
  console.log(posts);

  useEffect(() => {
    getAllPosts().then(setPosts);
    // getAllUpvotesFromPost(post_id).then(setUpVoteCount);
    // console.log(`this many`, upVoteCount);
  }, []);

  return (
    <>
      <div className="ui centered cards missing-people-container">
        {posts.map((person, i) => {
          return <MissingPersonCard key={person.post_id} {...person} />;
        })}
      </div>
    </>
  );
}
