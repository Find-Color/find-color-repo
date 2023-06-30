import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import { Typography } from "@material-tailwind/react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshakeSimple } from '@fortawesome/free-solid-svg-icons'

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);
  console.log(currentUser)
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header>
      <section className="logoAndText">
      <FontAwesomeIcon icon={faHandshakeSimple} size="2xl" style={{color: "#ffffff",}} className="logo" />
      <a id="logo" href="/">
        Find Color
      </a>
      </section>
      {/* <div className={isDarkMode ? 'dark' : 'light'}>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div> */}
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/posts" end={true}>
              Missing People
            </NavLink>
          </li>
          {currentUser ? (
            <li>
              <NavLink to={`/users/${currentUser.user_id}`}>
                {currentUser.username}
              </NavLink>
            </li>
          ) : (
            // if user logged in we will update nav up here ^ else update nav for down here /
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/sign-up">Sign Up</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
