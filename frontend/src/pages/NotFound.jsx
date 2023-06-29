import { Fragment } from "react";
import { Typography } from "@material-tailwind/react";

export default function NotFoundPage() {
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
          padding: "20px",
        }}
      >
        <Typography variant="h1" color="red">
          Page Not Found
        </Typography>
      </div>
    </Fragment>
  );
}
