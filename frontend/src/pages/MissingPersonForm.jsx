import React, { useState } from "react";

const MissingPersonForm = () => {
  // Define state variables to store form input values
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const [dateReported, setDateReported] = useState("");
  const [hair, setHair] = useState("");
  const [height, setHeight] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [weight, setWeight] = useState("");
  const [race, setRace] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [contactInfo, setContactInfo] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Access the form data here and perform desired actions
    // e.g., send it to an API, update state, etc.
    const formData = {
      name,
      location,
      status,
      dateReported,
      hair,
      height,
      eyeColor,
      weight,
      race,
      ethnicity,
      gender,
      age,
      image,
      description,
      contactInfo,
    };
    console.log(formData);
  };

  return (
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
          value={dateReported}
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
          value={eyeColor}
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Contact Information:
        <input
          type="text"
          value={contactInfo}
          onChange={(e) => setContactInfo(e.target.value)}
        />
      </label>
      {/* Submit button */}
      <button type="submit">Report Missing Person</button>
    </form>
  );
};

export default MissingPersonForm;
