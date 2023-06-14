import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);

  return <header>
    <a id='logo' href='/'>Find Color</a>
    <nav>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/users' end={true}>Users</NavLink></li>
        <li><NavLink to='/posts' end={true}>Missing People</NavLink></li>
        {
          currentUser ? 
          <li><NavLink to={`/users/${currentUser.id}`}>{currentUser.username}</NavLink></li> 
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
