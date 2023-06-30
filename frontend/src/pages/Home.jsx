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
          className="find-person  animate__animated animate__fadeIn"
          src="https://res.cloudinary.com/dn7lhv9d9/image/upload/v1688136223/inhsldvxdt5vdnt5nnhn.png"
          alt="Finding Color"
        />
        {/* <a href="https://storyset.com/job">Job illustrations by Storyset</a> */}
      </section>

      <section className="coverageWorth ">
        <div className="coverageWorthButton">
          <Typography variant="h1">How much coverage are YOU worth?</Typography>
          <a target="_blank" href="https://areyoupressworthy.com/">
            <Button color="red">Take the quiz now</Button>
          </a>
        </div>
        <div className="coverageWorthImage">
          <img
            src="https://res.cloudinary.com/dn7lhv9d9/image/upload/v1688091900/xyndob8ngtcad2tnrqvo.png"
            alt="Breaking News"
            className="landing-page-3"
          />
        </div>
      </section>
    </>
  );
}
