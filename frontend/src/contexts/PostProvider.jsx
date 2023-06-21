import { useState, useEffect, useContext } from "react";
import PostContext from "./PostContext.jsx";
import { getAllPosts } from "../adapters/post-adapter";

function PostProvider({ children }) {
  const [posts, setPosts] = useState([]); // Make a fetch call to the API update the state
  const [selectEthnicity, setSelectEthnicity] = useState("");
  const [selectGender, setSelectGender] = useState("");
  const [selectAge, setSelectAge] = useState("");

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

  const value = { posts };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

export default PostProvider;
