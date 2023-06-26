import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
    import UpdateUsernameForm from "./UpdateUsernameForm";
    import { useContext } from "react";
    import { useParams,  useNavigate } from "react-router-dom";
    import CurrentUserContext from "../contexts/current-user-context";
    import { logUserOut } from "../adapters/auth-adapter";
  export default function TransparentTabs() {
    const navigate = useNavigate();
    const handleLogout = async () => {
        logUserOut();
        setCurrentUser(null);
        navigate('/');
      };

    const containerStyle = {
        margin: '0 auto'
      };
      const { id } = useParams();
      const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
      const isCurrentUserProfile = currentUser && currentUser.id === Number(id);

    

  return (
    <div>
    <Tabs value="html" style={containerStyle} className="max-w-[40rem]">
      <TabsHeader
        className="bg-transparent"
        indicatorProps={{
          className: "bg-blue-500/10 shadow-none text-blue-500",
        }}
      >
        <Tab value="Edit Account">Edit Account</Tab>
        <Tab value="Quiz">Quiz</Tab>
        <Tab value="View Posts">View Posts</Tab>
        <Tab value="Log Out" onClick={handleLogout}>Log Out</Tab>
      </TabsHeader>
      <TabsBody>
        <TabPanel value="Edit Account">
        {
      !!isCurrentUserProfile
        && <UpdateUsernameForm currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    }
        </TabPanel>
        <TabPanel value="Quiz">
          Quiz
        </TabPanel>
        <TabPanel value="View Posts">
          Posts
        </TabPanel>
        {/* <TabPanel value="Log Out">
        { !!isCurrentUserProfile && <button onClick={handleLogout} color="red" variant="text">Log Outt</button> }
        </TabPanel> */}
      </TabsBody>
    </Tabs>
    </div>
  );
}