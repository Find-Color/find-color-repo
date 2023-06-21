import { useState, useEffect, useContext } from "react";
import PostContext from "./PostContext.jsx";
import { getAllPosts } from "../adapters/post-adapter";

function PostProvider({ children }) {
  const [posts, setPosts] = useState([]); // Make a fetch call to the API update the state
  const [selectEthnicity, setSelectEthnicity] = useState([]);
  const [selectGender, setSelectGender] = useState([]);
  const [selectAge, setSelectAge] = useState(["", ""]);
  const [selectStatus, setSelectStatus] = useState([]);

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

  let filteredResults = "";

  // if the filtered states exist, then filter posts based on those results
  if (
    selectEthnicity.length ||
    selectGender.length ||
    selectAge[0] !== "" ||
    selectAge[1] !== "" ||
    selectStatus.length
  ) {
    console.log(selectEthnicity, selectGender, selectAge, selectStatus);
    console.log(selectAge[0] !== "" || selectAge[1] !== "");
    filteredResults = posts.filter(post => {
      const resultBooleans = [];
      if (selectEthnicity.length) {
        resultBooleans.push(selectEthnicity.includes(post.ethnicity));
      }
      if (selectAge[0] !== "" || selectAge[1] !== "") {
        console.log("selectAge: ", selectAge);
        console.log(
          "age: ",
          post.age >= (selectAge[0] || 0) && post.age <= (selectAge[1] || 1000)
        );
        resultBooleans.push(
          post.age >= (selectAge[0] || 0) && post.age <= (selectAge[1] || 1000)
        );
      }
      if (selectGender.length) {
        resultBooleans.push(selectGender.includes(post.gender));
      }
      if (selectStatus.length) {
        resultBooleans.push(selectStatus.includes(post.status));
      }
      console.log(resultBooleans);
      return resultBooleans.every(boo => boo);
    });
  }

  const value = {
    posts,
    filteredResults,
    selectEthnicity,
    setSelectEthnicity,
    selectGender,
    setSelectGender,
    selectAge,
    setSelectAge,
    selectStatus,
    setSelectStatus,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

export default PostProvider;
