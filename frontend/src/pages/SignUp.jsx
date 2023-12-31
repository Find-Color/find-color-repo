import { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { createUser } from "../adapters/user-adapter";
import { Input, Button } from "@material-tailwind/react";

export default function SignUpPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // We could also use a single state variable for the form data:
  // const [formData, setFormData] = useState({ username: '', password: '' });
  // What would be the pros and cons of that?

  if (currentUser) return <Navigate to="/posts" />;

  const handleSubmit = async event => {
    event.preventDefault();
    setErrorText("");
    if (!username || !password)
      return setErrorText("Missing username or password");

    const [user, error] = await createUser({ username, password });
    if (error) return setErrorText(error.statusText);

    setCurrentUser(user);
    navigate("/posts");
  };

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center"}}>
    <div style={{ display: "flex", flexDirection: 'column', alignItems: "center", width: "400px", padding: "20px", border: "1px solid white"}}>
       
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} onChange={handleChange} style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <div>
        <label htmlFor="username">Username</label>
        <input
          autoComplete="off"
          type="text"
          id="username"
          name="username"
          onChange={handleChange}
          value={username}
          style={{ color: "black" }}
        />
        </div>
        <div>
        <label htmlFor="password">Password</label>
        <input
          autoComplete="off"
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
        </div>

        {/* In reality, we'd want a LOT more validation on signup, so add more things if you have time
        <label htmlFor="password-confirm">Password Confirm</label>
        <input autoComplete="off" type="password" id="password-confirm" name="passwordConfirm" />
      */}

        <button>Sign Up Now!</button>
      </form>
      {!!errorText && <p>{errorText}</p>}
      <p>
        Already have an account with us? <Link to="/login">Log in!</Link>
      </p>
      </div>
    </div>
  );
}
