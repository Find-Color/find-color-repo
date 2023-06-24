import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import CurrentUserContext from "../contexts/current-user-context";

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return <header>
    <a id='logo' href='/'>Find Color</a>
    {/* <div className={isDarkMode ? 'dark' : 'light'}>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div> */}
    <nav>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/users' end={true}>Users</NavLink></li>
        <li><NavLink to='/posts' end={true}>Missing People</NavLink></li>
        {
          currentUser ?
          <li><NavLink to={`/users/${currentUser.user_id}`}>{currentUser.username}</NavLink></li>
          : // if user logged in we will update nav up here ^ else update nav for down here /
          <>
              <li><NavLink to='/login'>Login</NavLink></li>
              <li><NavLink to='/sign-up'>Sign Up</NavLink></li>
            </>
        }
      </ul>
    </nav>
  </header>;
}
