// import { useNavigate } from "react-router-dom";
// import { updateUsername } from "../adapters/user-adapter";

// export default function UpdateUsernameForm({ currentUser, setCurrentUser }) {
//   const navigate = useNavigate();
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const [user, error] = await updateUsername(Object.fromEntries(formData.entries()));
//     // If our user isn't who they say they are
//     // (an auth error on update) log them out
//     if (error?.status > 400 && error?.status < 500) {
//       setCurrentUser(null);
//       return navigate('/');
//     }

//     setCurrentUser(user);
//     event.target.reset();
//   };

//   return <form onSubmit={handleSubmit}>
//     <label htmlFor='username'>New Username</label>
//     <input type='text' id='username' name='username'/>
//     <input type="hidden" name="id" value={currentUser.id} />

//     <button>Update Username</button>
//   </form>;
// }


import React from 'react';
import { useNavigate } from "react-router-dom";
import { updateUsername } from "../adapters/user-adapter";
import { Button, Input } from "@material-tailwind/react";

export default function UpdateUsernameForm({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const [user, error] = await updateUsername(Object.fromEntries(formData.entries()));

    if (error?.status > 400 && error?.status < 500) {
      setCurrentUser(null);
      return navigate('/');
    }

    setCurrentUser(user);
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
     <label htmlFor="username" className="text-sm text-gray-600 flex justify-center">New Username</label>

      <Input
        type="text"
        id="username"
        name="username"
        size="regular"
        outline={true}
        placeholder="Enter new username"
      />
     <div className="flex justify-center">
  <input type="hidden" name="id" value={currentUser.id} />

  <Button style={{ backgroundColor: "#ffb74d", width: "75%", padding: "5px" }} type="submit" ripple="light" block={true}>
    Update Username
  </Button>
</div>

    </form>
  );
}
