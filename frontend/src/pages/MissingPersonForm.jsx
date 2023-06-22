import React, { useState, useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../adapters/post-adapter";
import CurrentUserContext from "../contexts/current-user-context";

const MissingPersonForm = () => {
  // Define state variables to store form input values
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("Missing");
  const [date_reported, setDateReported] = useState("");
  const [hair, setHair] = useState("");
  const [height, setHeight] = useState("");
  const [eye_color, setEyeColor] = useState("");
  const [weight, setWeight] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("0");
  const [image, setImage] = useState("");
  const [description_text, setDescription] = useState("");
  const [contact_info, setContactInfo] = useState("")
  const [missingPersonURL, setMissingPersonURL] = useState("");
  const widgetRef = useRef(null);

  useEffect(() => {
    widgetRef.current = window.cloudinary.createUploadWidget(
      {
        cloudName: "dn7lhv9d9",
        uploadPreset: "ml_default",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Upload result:", result);
          const deliveryURL = result.info.secure_url;
          console.log("Delivery URL:", deliveryURL);
          setMissingPersonURL(deliveryURL);
        } else {
          console.error("Upload error:", error);
        }
      }
    );
  }, []);

  const openWidget = () => {
    widgetRef.current.open();
  };

  //Define context
  const { currentUser } = useContext(CurrentUserContext);
  //Define navigate (for redirecting)
  const navigate = useNavigate();
  // Handle form submission
  const handleSubmit = async e => {
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
      ethnicity: ethnicity,
      gender: gender,
      age: age,
      image: missingPersonURL,
      description_text: description_text,
      contact_info: contact_info,
      user_id: currentUser.id,
    };
    const result = await createPost(formData);
    if (result[0] == null) {
      alert(result[1]);
    } else {
      navigate("/posts", { replace: true });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields */}
      <label>
        Name:
        <input
          required
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      {/* Repeat this pattern for other input fields */}
      <label>
        Location:
        <input
          required
          type="text"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
      </label>
      <label>
        Status:
        <select
          required
          value={status}
          onChange={e => setStatus(e.target.value)}
        >
          <option value="Missing">Missing</option>
          <option value="Found">Found</option>
        </select>
      </label>
      <label>
        Date Reported:
        <input
          required
          type="date"
          value={date_reported}
          onChange={e => setDateReported(e.target.value)}
        />
      </label>
      <label>
        Hair Color:
        <select required value={hair} onChange={e => setHair(e.target.value)}>
          <option value="Black">Black</option>
          <option value="Light Brown">Light Brown</option>
          <option value="Brown">Brown</option>
          <option value="Dark Brown">Dark Brown</option>
          <option value="Blonde">Blonde</option>
          <option value="Ginger">Ginger</option>
          <option value="Dyed">Dyed</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <label>
        {/* //this calculates the height in inches */}
        Height:
        <input
          required
          type="number"
          min="0"
          value={Math.floor(height / 12)} // Calculate feet value
          onChange={e => {
            const feet = parseInt(e.target.value) || 0;
            setHeight(feet * 12 + (height % 12));
          }}
        />
        <p>ft</p>
        <input
          required
          type="number"
          min="0"
          max="11"
          value={height % 12} // Calculate inches value
          onChange={e => {
            const inches = parseInt(e.target.value) || 0;
            setHeight(Math.floor(height / 12) * 12 + inches);
          }}
        />
        <p>inches</p>
      </label>
      <label>
        Eye Color:
        <select
          required
          value={eye_color}
          onChange={e => setEyeColor(e.target.value)}
        >
          <option value="Brown">Brown</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
          <option value="Hazel">Hazel</option>
        </select>
      </label>
      <label>
        Weight (lbs):
        <input
          required
          type="number"
          min="0"
          value={weight}
          onChange={e => setWeight(e.target.value)}
        />
      </label>
      <label>
        Ethnicity:
        <select
          required
          value={ethnicity}
          onChange={e => setEthnicity(e.target.value)}
        >
          <option value="Other">Other</option>
          <option value="Latino/Hispanic">Latino/Hispanic</option>
          <option value="Black/African American">Black/African American</option>
          <option value="Asian">Asian</option>
          <option value="Hawaiian/Pacific Islander">
            Hawaiian/Pacific Islander
          </option>
          <option value="Indigenous American/Alaska Native">
            Indigenous American/Alaska Native
          </option>
          <option value="Middle Eastern/North African">
            Middle Eastern/North African
          </option>
          <option value="Multi-Racial">Multi-Racial</option>
        </select>
      </label>
      <label>
        Gender:
        <select
          required
          value={gender}
          onChange={e => setGender(e.target.value)}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Non-Binary">Non-Binary</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <label>
        Age:
        <input
          required
          type="number"
          min="0"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
      </label>
      <label>
        Image:
        <button onClick={openWidget}>Open Upload Widget</button>
      </label>
      <label>
        Description:
        <textarea
          value={description_text}
          onChange={e => setDescription(e.target.value)}
        ></textarea>
      </label>
      <label>
        Contact Information:
        <textarea
          value={contact_info}
          onChange={e => setContactInfo(e.target.value)}
        ></textarea>
      </label>
      {/* Submit button */}
      <button type="submit">Report Missing Person</button>
    </form>
  );
};

export default MissingPersonForm;