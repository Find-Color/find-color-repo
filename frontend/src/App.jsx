import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUp";
import LoginPage from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import SiteHeadingAndNav from "./components/SiteHeadingAndNav";
import NotFoundPage from "./pages/NotFound";
import UserContext from "./contexts/current-user-context";
import { checkForLoggedInUser } from "./adapters/auth-adapter";
import UsersPage from "./pages/Users";
import UserPage from "./pages/User";
import MissingPerson from "./pages/MissingPerson";
import MissingPersonForm from "./pages/MissingPersonForm";
import MissingPersonUpdateForm from "./pages/MissingPersonUpdateForm";
import Feed from "./pages/Feed";
import Footer from "./components/Footer";
import NewFooter from "./components/NewFooter";
import { Cloudinary } from "@cloudinary/url-gen";
 function App() {
  const cld = new Cloudinary({ cloud: { cloudName: "dn7lhv9d9" } });
  const { setCurrentUser } = useContext(UserContext);
  useEffect(() => {
    checkForLoggedInUser().then(setCurrentUser);
  }, [setCurrentUser]);

  return (
    // <ThemeProvider value={customTheme}>
    <>
      <SiteHeadingAndNav />
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:user_id" element={<UserPage />} />
          <Route path="/posts" element={<Feed />} />
          <Route path="/post/:id" element={<MissingPerson />} />
          <Route path="/missing_person" element={<MissingPersonForm />} />
          <Route
            path="/missing_person_update/:id"
            element={<MissingPersonUpdateForm />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <NewFooter />
    </>
    // </ThemeProvider>
  );
}

export default App