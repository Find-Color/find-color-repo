import { useContext, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { logUserIn } from "../adapters/auth-adapter";
import CurrentUserContext from "../contexts/current-user-context";
import { Input, Button } from "@material-tailwind/react";

export default function LoginPage() {
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState('');
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');
    const formData = new FormData(event.target);
    const [user, error] = await logUserIn(Object.fromEntries(formData.entries()));
    if (error) return setErrorText(error.statusText);
    setCurrentUser(user);
    navigate(`/users/${user.user_id}`);
  };

  if (currentUser) return <Navigate to="/" />;

//   return <>
//     <h1>Login</h1>
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="username" className="text-center">Username</label>
//       <input type="text" autoComplete="username" id="username" name="username" />

//       <label htmlFor="password" className="text-center">Password</label>
//       <input type="password" autoComplete="current-password" id="password" name="password" />

//       <button>Log in!</button>
//     </form>
//     { !!errorText && <p>{errorText}</p> }
//   </>;
// }



return (
  <div className="flex flex-col items-center">
    <h1 className="text-3xl font-bold mb-8">Login</h1>
    <form onSubmit={handleSubmit} className="w-full max-w-sm">
      <div className="mb-4">
        <label htmlFor="username" className="text-gray-700 text-sm mb-1">Username</label>
        <Input type="text" autoComplete="username" id="username" name="username" />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="text-gray-700 text-sm mb-1">Password</label>
        <Input type="password" autoComplete="current-password" id="password" name="password" />
      </div>

      {/* <Button style={{ backgroundColor: "#ffb74d", width: "75%", padding: "5px" }} type="submit" color="blue" ripple="light" block={true}>
        Log in!
      </Button> */}

<Button
  style={{ backgroundColor: "#ffb74d", width: "75%", padding: "5px", display:'flex', alignItems:'center' }}
  type="submit"
  color="blue"
  ripple="light"
  block={true}
  className="mx-auto flex justify-center"
>
  Log in!
</Button>

    </form>
    { !!errorText && <p>{errorText}</p> }
  </div>
)}
