import { useContext, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { logUserIn } from "../adapters/auth-adapter";
import CurrentUserContext from "../contexts/current-user-context";
import { Input, Button } from "@material-tailwind/react";

export default function LoginPage() {
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState("");
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const handleSubmit = async event => {
    event.preventDefault();
    setErrorText("");
    const formData = new FormData(event.target);
    const [user, error] = await logUserIn(
      Object.fromEntries(formData.entries())
    );
    if (error) return setErrorText(error.statusText);
    setCurrentUser(user);
    navigate(`/posts`);
  };

  if (currentUser) return <Navigate to="/" />;

  return (
    <div style={{ display: "flex", justifyContent: "center"}}>
    <div style={{ display: "flex", flexDirection: 'column', alignItems: "center", width: "400px", padding: "20px", border: "1px solid white"}}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: 'column', alignItems: "center"}}>
        <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          autoComplete="username"
          id="username"
          name="username"
          style={{ color: "black" }}
        />
        </div>
        <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          autoComplete="current-password"
          id="password"
          name="password"
          style={{ color: "black" }}
        />
        </div>
        <button style={{ backgroundColor: "#ffb74d", width: "75%", padding: "5px" }}
  type="submit"
  color="blue"
  ripple="light"
  block={true}
  className="mx-auto flex justify-center">Log in</button>
      </form>
      {!!errorText && <p>{errorText}</p>}
    </div>
    </div>
  );
}
