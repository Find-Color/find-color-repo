import CurrentUserContext from "../contexts/current-user-context"
import { Link } from "react-router-dom"
import { useContext } from "react";
const Footer = () => {
    const { currentUser } = useContext(CurrentUserContext);
    return (
       <div id= "footer">
        <div id= "footercol1">
            <div id="footerTitle" className='footerPadding'>
                <h1>Find Color</h1>
            </div>
            <div className='footerPadding'>
                <p>Latest Blog Post</p>
                <h2>Ready to get started?</h2>
                <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
        <div>
            <div className= "footercol2">
                <div className= "footerPadding">
                    {/* <div>
                        <p>Product</p>
                        <p>Product</p>
                        <p>Product</p>
                        <p>Product</p>
                        <p>Product</p>
                    </div> */}
                
                    <Link to='/'><p>Home</p></Link>
                    <Link to='/posts'><p>Missing People</p></Link>
                    {currentUser ? (
            <p>
              <Link to={`/users/${currentUser.user_id}`}>
                {currentUser.username}
              </Link>
            </p>
          ) : (
            // if user logged in we will update nav up here ^ else update nav for down here /
            <>
              <p>
                <Link to="/login">Login</Link>
              </p>
              <p>
                <Link to="/sign-up">Sign Up</Link>
              </p>
            </>
          )}
                </div>
            </div>
            <div className= "footercol2 footerPadding">
                <p>© 2010 — 2020   Privacy — Terms</p>
            </div>
        </div>
       </div> 
    )
}

export default Footer