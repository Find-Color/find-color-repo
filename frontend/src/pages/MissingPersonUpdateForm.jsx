import React, { useState, useEffect, useContext, useRef } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { getPost } from "../adapters/post-adapter";
import { updatePost } from "../adapters/post-adapter";
import { deleteOptions, fetchHandler } from "../utils";
import {
  Input,
  Select,
  Option,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";

const MissingPersonUpdateForm = () => {
  const { id } = useParams();
  const [missing, setMissing] = useState("");

  // Define state variables to store form input values
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [location_state, setLocationState] = useState("");
  const [status, setStatus] = useState("Missing");
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
          setImage(deliveryURL);
          console.error("Upload error:", error);
        }
      }
    );
  }, []);

  const openWidget = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    widgetRef.current.open();
  };

  useEffect(() => {
    getPost(id).then((res) => setMissing(res[0]));
    if (missing) {
      setName(missing.name);
      setLocation(missing.location);
      setLocationState(missing.location_state);
      setStatus(missing.status);
      setDateReported(missing.date_reported.match(/^.{10}/)[0]);
      setHair(missing.hair);
      setFeet(Math.floor(missing.height / 12));
      setInches(missing.height % 12);
      setEyeColor(missing.eye_color);
      setWeight(missing.weight);
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
    const height = feet * 12 + inches;
    const formData = {
      name: name,
      location: location,
      location_state: location_state,
      status: status,
      date_reported: date_reported,
      hair: hair,
      height: height,
      eye_color: eye_color,
      weight: weight,
      ethnicity: ethnicity,
      gender: gender,
      age: age,
      image: image,
      description_text: description_text,
      contact_info: contact_info,
      user_id: currentUser.id,
    };
    const result = await updatePost(id, formData);
    if (result[0] == null) {
      alert(result[1]);
    } else {
      navigate(`/post/${id}`, { replace: true });
    }
  };

  function handleDelete() {
    fetchHandler(`/api/post/${id}`, deleteOptions);
    navigate(`/posts`);
  }

  return (
    <>
      <Typography variant="h2" className="flex items-center justify-center">
        Update Form
      </Typography>
      <form onSubmit={handleSubmit} className="missingPersonForm">
        {/* Input fields */}
        <Input
          color="white"
          required
          variant="standard"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          color="white"
          variant="standard"
          label="City / Town"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Select
          color="gray-50"
          variant="gray-50"
          required
          label="State"
          value={location_state}
          onChange={(e) => setLocationState(e)}
        >
          {statesUSA.map((name, i) => (
            <Option key={i} value={name}>
              {name}
            </Option>
          ))}
        </Select>
        {/* need to find a tailwind date picker */}
        <Input
          className="text-white placeholder-white label-white"
          color="gray-50"
          variant="gray-50"
          required
          label="Date Reported"
          type="date"
          value={date_reported}
          onChange={(e) => setDateReported(e.target.value)}
        />
        {/*  */}
        <Select
          className="text-white placeholder-white label-white input-group"
          color="gray-50"
          variant="gray-50"
          required
          label="Ethnicity"
          value={ethnicity}
          onChange={(e) => setEthnicity(e)}
        >
          {ethnicities.map((name, i) => (
            <Option key={i} value={name}>
              {name}
            </Option>
          ))}
        </Select>

        <Input
          className="text-white placeholder-white label-white"
          required
          label="Age"
          type="number"
          min="0"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <Select
          className="text-white placeholder-white label-white"
          label="Gender"
          variant="standard"
          required
          value={gender}
          onChange={(e) => setGender(e)}
        >
          <Option value="Male">Male</Option>
          <Option value="Female">Female</Option>
          <Option value="Non-Binary">Non-Binary</Option>
          <Option value="Other">Other</Option>
        </Select>

        <div className=" flex gap-2">
          <Input
            className="text-white placeholder-white label-white"
            color="white"
            required
            label="Height ( ft )"
            type="number"
            min="0"
            variant="outlined"
            value={feet}
            onChange={(e) => setFeet(e.target.value)}
          />
          <p>ft</p>
          <Input
            color="white"
            required
            label="Height ( in )"
            type="number"
            max="11"
            value={inches}
            onChange={(e) => setInches(e.target.value)}
          />
          <p>in</p>
        </div>

        <Select
          color="white"
          className="text-white placeholder-white label-white"
          variant="standard"
          label="Hair Color"
          value={hair}
          onChange={(e) => setHair(e)}
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
        {/* //this calculates the height in inches */}
        <Select
          label="Eye Color"
          className="text-white placeholder-white label-white"
          color="white"
          variant="standard"
          required
          value={eye_color}
          onChange={(e) => setEyeColor(e)}
        >
          <Option value="Brown">Brown</Option>
          <Option value="Blue">Blue</Option>
          <Option value="Green">Green</Option>
          <Option value="Hazel">Hazel</Option>
        </Select>

        <Input
          color="white"
          required
          label="Weight ( lbs )"
          type="number"
          min="0"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <Input
          color="white"
          label="Image"
          // placeholder="test"
          className="text-white placeholder-white label-white"
          // type="file"
          // value={image}
          // onClick={(e) => openWidget(e)}
        />

        <div
          className="relative flex w-full max-w-[24rem]"
          onClick={(e) => openWidget(e)}
        >
          <Button
            color="red"
            size="sm"
            className="!absolute right-1 top-1 rounded w-20"
          >
            Upload
          </Button>
          <Input
            readOnly
            label="Image"
            value={image}
            className="pr-20 w-100"
            containerProps={{
              className: "min-w-0",
            }}
          />
        </div>
        <Textarea
          className="text-white"
          inputClass="text-white"
          label="Description"
          variant="standard"
          value={description_text}
          onChange={(e) => setDescription(e.target.value)}
        ></Textarea>

        <Textarea
          className="text-white"
          inputClass="text-white"
          label="Contact Information"
          value={contact_info}
          onChange={(e) => setContactInfo(e.target.value)}
        ></Textarea>
        {/* Submit button */}

        <Button color="red" type="submit">
          Update Form
        </Button>
        <Button color="red" onClick={handleDelete}>
          Remove Post
        </Button>
      </form>
    </>
  );
};

export default MissingPersonUpdateForm;

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
