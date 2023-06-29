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
          <Typography variant="h1" style={{ marginBottom: '20px', fontSize: '32px', fontWeight: 'bold' }}>
            How much coverage are your worth?
          </Typography>
          <Typography variant="lead" style={{ fontSize: '18px', lineHeight: '1.5'}}>
          In today's media landscape, a profound disparity in coverage regarding missing persons has become evident. Despite tens of thousands of reported missing individuals, only a fraction of these cases receive substantial press attention. Critics argue that the media exhibits a tendency to prioritize attractive, young white women, thereby neglecting the cases of missing women who belong to marginalized groups based on race, age, body size, or non-conventional attractiveness. This media bias highlights an alarming manifestation of racism and systemic discrimination, contributing to the perpetuation of inequity within our society.
          <br />
          <br />
          Cases such as that of Gabby Petito exemplify the phenomenon known as "missing white woman syndrome," where disproportionate media coverage detracts attention and resources from other cases, particularly those involving individuals of color. It is of utmost importance that we address and challenge these biases, actively striving for equal and unbiased media coverage for all missing persons, irrespective of their race or physical appearance.
          </Typography>
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
