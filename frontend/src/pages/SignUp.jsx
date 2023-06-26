import { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { createUser } from "../adapters/user-adapter";
import { Input, Button } from "@material-tailwind/react";

export default function SignUpPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (currentUser) return <Navigate to="/" />;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');
    if (!username || !password) return setErrorText('Missing username or password');

    const [user, error] = await createUser({ username, password });
    if (error) return setErrorText(error.statusText);

    setCurrentUser(user);
    navigate('/');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Sign Up</h1>
      <form onSubmit={handleSubmit} onChange={handleChange} className="w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="username" className="text-gray-700 text-sm mb-1">Username</label>
          <Input
            type="text"
            autoComplete="username"
            id="username"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="text-gray-700 text-sm mb-1">Password</label>
          <Input
            type="password"
            autoComplete="off"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>

        <Button
          style={{ backgroundColor: "#ffb74d", width: "75%", padding: "5px", display: 'flex', alignItems: 'center' }}
          type="submit"
          color="blue"
          ripple="light"
          block={true}
          className="mx-auto flex justify-center"
        >
          Sign Up Now!
        </Button>
      </form>
      {!!errorText && <p>{errorText}</p>}
      <p>
        Already have an account with us? <Link to="/login">Log in!</Link>
      </p>
    </div>
  );
}
