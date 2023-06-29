import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import UsersPostsList from "./UsersPostsList"

import UpdateUsernameForm from "./UpdateUsernameForm";
import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { logUserOut } from "../adapters/auth-adapter";
export default function TransparentTabs() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    logUserOut();
    setCurrentUser(null);
    navigate("/");
  };

  const containerStyle = {
    margin: "0 auto",
  };
  const { user_id } = useParams();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const isCurrentUserProfile = currentUser ? currentUser?.user_id === Number(user_id) : null
  console.log(user_id)
  console.log(`current user:`, currentUser);
  console.log(`isCurrentUserProfile:`, isCurrentUserProfile);

  return (
    <div>
      <Tabs value="Edit Account" style={containerStyle} className="max-w-[40rem]" >
        <TabsHeader
          className="bg-transparent"
          indicatorProps={{
            className: "bg-blue-500/10 shadow-none text-blue-500",
          }}
        >
          <Tab value="Edit Account" className="text-white-500">Edit Account</Tab>
          <Tab value="View Posts" className="text-white-500">View Posts</Tab>
          <Tab value="Log Out" className="text-white-500" onClick={handleLogout}>
            Log Out
          </Tab>
        </TabsHeader>
        <TabsBody>
          <TabPanel value="Edit Account">
            {!!isCurrentUserProfile && (
              <UpdateUsernameForm
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            )}
          </TabPanel>
          <TabPanel value="View Posts">
            <UsersPostsList />

          </TabPanel>
          <TabPanel value="Log Out">
        { !!isCurrentUserProfile && <button onClick={handleLogout} color="red" variant="text">Log Outt</button> }
        </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
}
