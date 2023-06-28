import MissingPersonCard from "./MissingPersonCard";
import { useState, useEffect, useContext } from "react";
import PostContext from "../contexts/PostContext";
import { checkForLoggedInUser } from "../adapters/auth-adapter";



export default function UsersPostsList() {
  const { posts, filteredResults } = useContext(PostContext);
  const [loggedIn, setLoggedIn] = useState(null)
  useEffect(() => {
    checkForLoggedInUser().then((data) => {
      setLoggedIn(data);
    });
  }, []);
  const filteredArray = posts.filter(post => post.user_id === loggedIn.user_id)
  return (
    <>
      <div className="ui centered cards missing-people-container" id="missingPersonCardParent">
        {filteredArray.map((person, i) => {
          return <MissingPersonCard key={person.post_id} {...person} />;
        })}
      </div>
    </>
  );
}
