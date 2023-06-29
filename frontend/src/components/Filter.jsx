import PostContext from "../contexts/PostContext.jsx";
import { useContext } from "react";
import { Checkbox, Chip, Input, Button } from "@material-tailwind/react";
import { XCircleIcon } from "@heroicons/react/24/outline";

function Filter() {
  const {
    setSelectEthnicity,
    setSelectGender,
    setSelectAge,
    setSelectStatus,
    setSelectName,
  } = useContext(PostContext);

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

  const genders = ["Female", "Male", "Non-Binary", "Other"];

  const handleChange = e => {
    const form = document.getElementById("form");
    const formData = new FormData(form);

    const name = formData.get("Name");
    const status = formData.getAll("Status");
    const ethnicity = formData.getAll("Ethnicity");
    const gender = formData.getAll("Gender");
    const ageMin = formData.get("Age-");
    const ageMax = formData.get("Age+");

    setSelectName(name);
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
    <section id="missingPersonFiltersParent">
      <form
        id="form"
        onChange={handleChange}
        className="flex flex-col gap-2 missingPersonFilters"
      >
        <div className="flex gap-5">
          <div className="flex flex-col justify-center gap-2">
            {/* //name, status and age */}
            <Input
              name="Name"
              label="Name"
              pattern="[A-Za-z ]*"
              color="white"
            />
            <h5>Status</h5>
            <div className="flex gap-2">
              <Chip
                value="Missing"
                variant="ghost"
                color="red"
                icon={
                  <Checkbox
                    color="red"
                    name="Status"
                    value="Missing"
                    ripple={false}
                    containerProps={{ className: "p-0" }}
                    className="border-red-900 border-2 checked:bg-red-900 checked:border-red-900 -ml-px before:hidden"
                  />
                }
              />
              <Chip
                value="Found"
                variant="ghost"
                color="green"
                icon={
                  <Checkbox
                    color="green"
                    name="Status"
                    value="Found"
                    ripple={false}
                    containerProps={{ className: "p-0 flex items-center" }}
                    className="border-green-900 border-2 checked:bg-green-900 checked:border-green-900 -ml-px before:hidden"
                  />
                }
              />
            </div>
            <h5>Gender</h5>
            <div className="flex flex-col gap-2">
              {genders.map((name, i) => (
                <Chip
                  variant="outlined"
                  value={name}
                  color="gray"
                  className="rounded-full"
                  icon={
                    <Checkbox
                      color="white"
                      name="Gender"
                      className="rounded-full border"
                      value={name}
                      ripple={false}
                      containerProps={{ className: "p-0" }}
                    />
                  }
                />
              ))}
            </div>
          </div>
          <div>
            <h5>Ethnicity</h5>
            <div className="flex flex-col gap-2 ">
              {ethnicities.map((name, i) => (
                <Chip
                  variant="outlined"
                  value={name}
                  color="gray"
                  className="rounded-full"
                  icon={
                    <Checkbox
                      color="gray"
                      name="Ethnicity"
                      className="rounded-full"
                      value={name}
                      ripple={false}
                      containerProps={{ className: "p-0" }}
                    />
                  }
                />
              ))}
            </div>
          </div>
        </div>
        <div>
          <h5>Age</h5>
          <div className="flex gap-2">
            <Input
              type="number"
              min="0"
              name="Age-"
              label="Min"
              color="white"
            />
            <p>to</p>
            <Input
              type="number"
              max="100"
              name="Age+"
              label="Max"
              color="white"
            />
          </div>
        </div>
        <Button type="button" color="gray" onClick={handleClear}>
          <XCircleIcon strokeWidth={2} className="h-5 w-5" />
          Clear
        </Button>
      </form>
    </section>
  );
}

export default Filter;
