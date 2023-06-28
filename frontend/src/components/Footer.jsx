import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";

const Footer = () => {
  const { currentUser } = useContext(CurrentUserContext);
  console.log(currentUser);
  return (
    <div id="footer">
      <div id="footercol1">
        <div id="footerTitle" className="footerPadding">
          <h1>Find Color</h1>
        </div>
        <div className="footerPadding">
          <h1>Who Do We Serve?</h1>
          <br />
          <p>
            Our platform is designed for anyone who wishes to actively
            participate in efforts to find missing individuals, share vital
            information, and support their families. We aim to create a space
            where people from various backgrounds, cultures, and experiences can
            come together, unite their voices, and contribute towards achieving
            positive outcomes for the missing persons and their loved ones.
          </p>
        </div>
      </div>
      <div>
        <div className="footercol2">
          <div className="footercol2 footerPadding">
            <div>
              <h1>Main Pages</h1>
              <br />
              <Link to="/sign-up" className="seeMoreButton">
                Sign Up
              </Link>
              <br />
              {currentUser ? (
                <Link
                  to={`/users/${currentUser.user_id}`}
                  className="seeMoreButton"
                >
                  Profile
                </Link>
              ) : (
                <Link to="/login" className="seeMoreButton">
                  Login
                </Link>
              )}
              <br />
              <Link to="/" className="seeMoreButton">
                Home
              </Link>
              <br />
              <Link to="/posts" className="seeMoreButton" end={true}>
                Feed
              </Link>
            </div>
            <div>
              <h1>About Us</h1>
              <br />
              <p>Mathew</p>
              <p>India</p>
              <p>Ivon</p>
              <p>SJ</p>
            </div>
          </div>
        </div>
        <div className="footercol2 footerPadding">
          <p>882 3rd Ave 11th floor</p>
          <br />
          <p>Brooklyn, NY 11232</p>
          <br />
          <br />
          <p>© 2020 — 2030 Privacy — Terms</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
