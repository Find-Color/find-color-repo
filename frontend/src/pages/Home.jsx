import { Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <section className="landingPage-1">
        <div className="landingPage-1-text">
          <Typography variant="h1" className="landing-page-intro">
            Find Color
            <br />
            Finds Your Loved Ones.
          </Typography>
          <Typography variant="h6" className="landing-page-blurb">
            We strive to bridge the gap, amplify the voices, and ensure that
            every missing person of color is given the attention and resources
            they deserve. Together, we aim to bring hope, facilitate
            connections, and reunite families.
          </Typography>
          <Link to="/posts" end={true}>
            <Button color="red" className="w50">
              Go To Find Color
            </Button>
          </Link>
        </div>
        <img
          className="find-person"
          src="./src/images/find-person.png"
          alt="Finding Color"
        />
        {/* <a href="https://storyset.com/job">Job illustrations by Storyset</a> */}
      </section>
      {/* <section id="bnwimageparent">
        <Typography className="bnwText" variant="h1">
          "Darkness cannot drive out darkness; only light can do that. Hate
          cannot drive out hate; only love can do that." –Martin Luther King Jr.
        </Typography>
        <img className="collage" src="./src/images/collage.png" alt="" />
      </section> */}

      {/* Indias blank template */}

      {/* <section className="className4">
        <img
          src="./src/images/landing-page-3.jpg"
          alt=""
          className="landing-page-5"
        />
      </section> */}

      <section className="coverageWorth">
        <div className="coverageWorthText">
          <Typography variant="h1">
            How much coverage are YOU worth?
          </Typography>
          {/* <Typography variant="lead">
            Your news coverage depends on your demographics yada yada we gotta
            do a lil blurb here that segways into take the quiz
          </Typography> */}
        </div>

        <div className="coverageWorthButton">
          <a target="_blank" href="https://areyoupressworthy.com/">
            <Button color="red">Take the quiz now</Button>
          </a>
        </div>

        <img
          src="./src/images/landing-page-3.jpg"
          alt=""
          className="landing-page-3"
        />
      </section>
    </>
  );
}
