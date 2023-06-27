import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { getUser } from "../adapters/user-adapter";
import { logUserOut } from "../adapters/auth-adapter";
import UpdateUsernameForm from "../components/UpdateUsernameForm";
import { Button, Typography } from "@material-tailwind/react";
import Quiz from '../components/Quiz';
import TransparentTabs from "../components/profiletabs";

export default function UserPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [userProfile, setUserProfile] = useState(null);
  const [errorText, setErrorText] = useState(null);
  const { user_id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.user_id === Number(user_id);

  useEffect(() => {
    const loadUser = async () => {
      const [user, error] = await getUser(user_id);
      if (error) return setErrorText(error.statusText);
      setUserProfile(user);
    };

    loadUser();
  }, [user_id]);

  const handleLogout = async () => {
    logUserOut();
    setCurrentUser(null);
    navigate('/');
  };

  <Quiz
  name="John Doe"
  bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  imageLink="https://example.com/image.jpg"
  websiteLink="https://areyoupressworthy.com/22_3"
/>

  if (!userProfile && !errorText) return null;
  if (errorText) return <p>{errorText}</p>;

  // What parts of state would change if we altered our currentUser context?
  // Ideally, this would update if we mutated it
  // But we also have to consider that we may NOT be on the current users page
  const profileUsername = isCurrentUserProfile ? currentUser.username : userProfile.username;

  return <>
  <section className="userTabs" >
  {/* <Typography variant="h4" color="blue-gray">{profileUsername}</Typography> */}
    {/* <Button color="red" variant="text">Edit Profile</Button>
    <Button color="red" variant="text">Quiz</Button>
    <Button color="red" variant="text">View Posts</Button> */}
    {/* { !!isCurrentUserProfile && <Button onClick={handleLogout} color="red" variant="text">Log Out</Button> } */}
  </section>
  <TransparentTabs />
    
    {/* {
      !!isCurrentUserProfile
        && <UpdateUsernameForm currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    } */}
  </>;
}