import PostContext from "../contexts/PostContext.jsx";
import { useContext } from "react";

function Filter() {
  const {
    setSelectEthnicity,
    setSelectGender,
    selectAge,
    setSelectAge,
    setSelectStatus,
  } = useContext(PostContext);

  const handleChange = e => {
    const form = document.getElementById("form");
    const formData = new FormData(form);

    const status = formData.getAll("Status");
    const ethnicity = formData.getAll("Ethnicity");
    const gender = formData.getAll("Gender");
    const ageMin = formData.get("Age-");
    const ageMax = formData.get("Age+");

    setSelectStatus(status);
    setSelectEthnicity(ethnicity);
    setSelectGender(gender);
    setSelectAge([ageMin, ageMax]);
  };

  const handleClear = () => {
    const form = document.getElementById("form");
    form.reset();

    setSelectStatus([]);
    setSelectEthnicity([]);
    setSelectGender([]);
    setSelectAge(["", ""]);
  };

  return (
    <>
      <form id="form" onChange={handleChange}>
        <h5>Status</h5>
        <input type="checkbox" name="Status" value="Missing" />
        <label for="Missing">Missing</label>
        <input type="checkbox" name="Status" value="Found" />
        <label for="Found">Found</label>
        <h5>Ethnicity</h5>
        <label for="Latino/Hispanic">Latino/Hispanic</label>
        <input type="checkbox" name="Ethnicity" value="Latino/Hispanic" />
        <label for="Black/African American">Black/African American</label>
        <input
          type="checkbox"
          name="Ethnicity"
          value="Black/African American"
        />
        <label for="Asian">Asian</label>
        <input type="checkbox" name="Ethnicity" value="Asian" />
        <label for="Hawaiian/Pacific Islander">Hawaiian/Pacific Islander</label>
        <input
          type="checkbox"
          name="Ethnicity"
          value="Hawaiian/Pacific Islander"
        />
        <label for="Indigenous American/Alaska Native">
          Indigenous American/Alaska Native
        </label>
        <input
          type="checkbox"
          name="Ethnicity"
          value="Indigenous American/Alaska Native"
        />
        <label for="Middle Eastern/North African">
          Middle Eastern/North African
        </label>
        <input
          type="checkbox"
          name="Ethnicity"
          value="Middle Eastern/North African"
        />
        <label for="Multi-Racial">Multi-Racial</label>
        <input type="checkbox" name="Ethnicity" value="Multi-Racial" />
        <h5>Gender</h5>
        <label for="Female">Female</label>
        <input type="checkbox" name="Gender" value="Female" />
        <label for="Male">Male</label>
        <input type="checkbox" name="Gender" value="Male" />
        <label for="Non-Binary">Non-Binary</label>
        <input type="checkbox" name="Gender" value="Non-Binary" />
        <label for="Other">Other</label>
        <input type="checkbox" name="Gender" value="Other" />
        <h5>Age</h5>
        <input type="number" min="0" name="Age-" />
        <p>-</p>
        <input type="number" max="100" name="Age+" />
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </form>
    </>
  );
}

export default Filter;
