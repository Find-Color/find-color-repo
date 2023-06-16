import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { getPost } from "../adapters/post-adapter";
import { updatePost } from "../adapters/post-adapter";
import { deleteOptions, fetchHandler } from "../utils";

const MissingPersonUpdateForm = () => {
  const { id } = useParams();
  const [missing, setMissing] = useState("");

  // Define state variables to store form input values
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const [date_reported, setDateReported] = useState("");
  const [hair, setHair] = useState("");
  const [height, setHeight] = useState("");
  const [eye_color, setEyeColor] = useState("");
  const [weight, setWeight] = useState("");
  const [race, setRace] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState("");
  const [description_text, setDescription] = useState("");
  const [contact_info, setContactInfo] = useState("");

  useEffect(() => {
    getPost(id).then((res) => setMissing(res[0]));
  }, []);

  useEffect(() => {
    if (missing) {
      setName(missing.name);
      setLocation(missing.location);
      setStatus(missing.status);
      setDateReported(missing.date_reported);
      setHair(missing.hair);
      setHeight(missing.height);
      setEyeColor(missing.eye_color);
      setWeight(missing.weight);
      setRace(missing.race);
      setEthnicity(missing.ethnicity);
      setGender(missing.gender);
      setAge(missing.age);
      setImage(missing.image);
      setDescription(missing.description_text);
      setContactInfo(missing.contact_info);
    }
  }, [missing]);

  console.log(missing?.name);

  //Define context
  const { currentUser } = useContext(CurrentUserContext);
  //Define navigate (for redirecting)
  const navigate = useNavigate();
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Access the form data here and perform desired actions
    // e.g., send it to an API, update state, etc.
    const formData = {
      name: name,
      location: location,
      status: status,
      date_reported: date_reported,
      hair: hair,
      height: height,
      eye_color: eye_color,
      weight: weight,
      race: race,
      ethnicity: ethnicity,
      gender: gender,
      age: age,
      image: image,
      description_text: description_text,
      contact_info: contact_info,
      user_id: currentUser.id,
    };

    // Update Form
    const result = await updatePost(id, formData);
    if (result[0] == null) {
      alert(result[1]);
    } else {
      navigate(`/post/${id}`, { replace: true });
    }
  };

  // Delete Post
  function handleDelete() {
    fetchHandler(`/api/post/${id}`, deleteOptions);
    navigate(`/posts`);
  }

  return (
    <>
      <h1 className="updateFormTitle">Update Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Input fields */}
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        {/* Repeat this pattern for other input fields */}
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label>
          Status:
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </label>
        <label>
          Date Reported:
          <input
            type="text"
            value={date_reported}
            onChange={(e) => setDateReported(e.target.value)}
          />
        </label>
        <label>
          Hair:
          <input
            type="text"
            value={hair}
            onChange={(e) => setHair(e.target.value)}
          />
        </label>
        <label>
          Height:
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
        <label>
          Eye Color:
          <input
            type="text"
            value={eye_color}
            onChange={(e) => setEyeColor(e.target.value)}
          />
        </label>
        <label>
          Weight:
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
        <label>
          Race:
          <input
            type="text"
            value={race}
            onChange={(e) => setRace(e.target.value)}
          />
        </label>
        <label>
          Ethnicity:
          <input
            type="text"
            value={ethnicity}
            onChange={(e) => setEthnicity(e.target.value)}
          />
        </label>
        <label>
          Gender:
          <input
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </label>
        <label>
          Age:
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description_text}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Contact Information:
          <input
            type="text"
            value={contact_info}
            onChange={(e) => setContactInfo(e.target.value)}
          />
        </label>
        {/* Submit button */}
        <button type="submit">Update Form</button>
        <button onClick={handleDelete}>Remove Post</button>
      </form>
    </>
  );
};

export default MissingPersonUpdateForm;
