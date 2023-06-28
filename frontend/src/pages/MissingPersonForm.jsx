import React, { useState, useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../adapters/post-adapter";
import CurrentUserContext from "../contexts/current-user-context";
//the tailwind
import {
  Input,
  Select,
  Option,
  Textarea,
  Button,
} from "@material-tailwind/react";

const MissingPersonForm = () => {
  // Define state variables to store form input values
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [location_state, setLocationState] = useState("");
  const [date_reported, setDateReported] = useState("");
  const [hair, setHair] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [eye_color, setEyeColor] = useState("");
  const [weight, setWeight] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("0");
  const [image, setImage] = useState("");
  const [description_text, setDescription] = useState("");
  const [contact_info, setContactInfo] = useState("");
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
          console.error("Upload error:", error);
        }
      }
    );
  }, []);

  const openWidget = e => {
    e.preventDefault(); // Prevent the default form submission behavior
    widgetRef.current.open();
  };

  //Define context
  const { currentUser } = useContext(CurrentUserContext);
  //Define navigate (for redirecting)
  const navigate = useNavigate();
  // Handle form submission
  const handleSubmit = async e => {
    e.preventDefault();

    const height = feet * 12 + inches;
    const formData = {
      name: name,
      location: location,
      location_state: location_state,
      status: "Missing",
      date_reported: date_reported,
      hair: hair,
      height: height,
      eye_color: eye_color,
      weight: weight,
      ethnicity: ethnicity,
      gender: gender,
      age: age,
      image_post: missingPersonURL,
      description_text: description_text,
      contact_info: contact_info,
      user_id: currentUser.user_id,
    };
    const result = await createPost(formData);
    if (result[0] == null) {
      alert(result[1]);
    } else {
      navigate("/posts", { replace: true });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="missingPersonForm">
      <Input
        required
        variant="standard"
        label="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Input
        variant="standard"
        label="City / Town"
        value={location}
        onChange={e => setLocation(e.target.value)}
      />
      <Select
        required
        label="State"
        variant="standard"
        value={location_state}
        onChange={e => setLocationState(e)}
      >
        {statesUSA.map((name, i) => (
          <Option key={i} value={name}>
            {name}
          </Option>
        ))}
      </Select>
      {/* need to find a tailwind date picker */}
      <Input
        required
        label="Date Reported"
        type="date"
        value={date_reported}
        onChange={e => setDateReported(e.target.value)}
      />
      {/*  */}
      <Select
        required
        label="Ethnicity"
        variant="standard"
        value={ethnicity}
        onChange={e => setEthnicity(e)}
      >
        {ethnicities.map((name, i) => (
          <Option key={i} value={name}>
            {name}
          </Option>
        ))}
      </Select>

      <Input
        required
        label="Age"
        type="number"
        min="0"
        value={age}
        onChange={e => setAge(e.target.value)}
      />

      <Select
        label="Gender"
        variant="standard"
        required
        value={gender}
        onChange={e => setGender(e)}
      >
        <Option value="Male">Male</Option>
        <Option value="Female">Female</Option>
        <Option value="Non-Binary">Non-Binary</Option>
        <Option value="Other">Other</Option>
      </Select>

      <div className=" flex gap-2">
        <Input
          required
          label="Height ( ft )"
          type="number"
          min="0"
          variant="outlined"
          value={feet}
          onChange={e => setFeet(e.target.value)}
        />
        <p>ft</p>
        <Input
          required
          label="Height ( in )"
          type="number"
          min="0"
          max="11"
          value={inches}
          onChange={e => setInches(e.target.value)}
        />
        <p>in</p>
      </div>

      <Select
        variant="standard"
        label="Hair Color"
        value={hair}
        onChange={e => setHair(e)}
      >
        <Option value="Black">Black</Option>
        <Option value="Light Brown">Light Brown</Option>
        <Option value="Brown">Brown</Option>
        <Option value="Dark Brown">Dark Brown</Option>
        <Option value="Blonde">Blonde</Option>
        <Option value="Ginger">Ginger</Option>
        <Option value="Dyed">Dyed</Option>
        <Option value="Other">Other</Option>
      </Select>

      <Select
        label="Eye Color"
        variant="standard"
        required
        value={eye_color}
        onChange={e => setEyeColor(e)}
      >
        <Option value="Brown">Brown</Option>
        <Option value="Blue">Blue</Option>
        <Option value="Green">Green</Option>
        <Option value="Hazel">Hazel</Option>
      </Select>

      <Input
        required
        label="Weight ( lbs )"
        type="number"
        min="0"
        value={weight}
        onChange={e => setWeight(e.target.value)}
      />

      <Input
        label="Image"
        type="file"
        value={image}
        onClick={e => openWidget(e)}
      />

      <Textarea
        label="Description"
        variant="standard"
        value={description_text}
        onChange={e => setDescription(e.target.value)}
      ></Textarea>

      <Textarea
        label="Contact Information"
        value={contact_info}
        onChange={e => setContactInfo(e.target.value)}
      ></Textarea>

      <Button type="submit">Report Missing Person</Button>
    </form>
  );
};

export default MissingPersonForm;

const ethnicities = [
  "Other",
  "Latino/Hispanic",
  "Black/African American",
  "Asian",
  "Hawaiian/Pacific Islander",
  "Indigenous American/Alaska Native",
  "Middle Eastern/North African",
  "Multi-Racial",
];

const statesUSA = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];
