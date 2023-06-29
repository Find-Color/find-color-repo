import { Typography, Button } from "@material-tailwind/react";

export default function HomePage() {
  return (
    <>
      <section className="landingPage-1">
        <div className="landingPage-1-text">
          <Typography variant="h1">Find Color Finds your loved ones</Typography>
          <Typography variant="paragraph">
            Our mission is to foster a united community where individuals can
            come together to actively support and locate missing persons of
            color. We provide a dedicated platform that empowers users to share
            information, raise awareness, and collaborate in the search efforts.
            Through our app, we strive to bridge the gap, amplify the voices,
            and ensure that every missing person of color is given the attention
            and resources they deserve. Together, we aim to bring hope,
            facilitate connections, and reunite families.
          </Typography>
          <Button color="red" className="w50">
            Sign Up
          </Button>
        </div>

        <img
          src="./src/images/landing-page-photo.png"
          alt=""
          className="landingimg-1"
        />
        <img
          src="./src/images/landing-page-1.jpg"
          alt=""
          className="landing-page-1"
        />
      </section>

      {/* Indias blank template */}
      <section className="className4">
        <img
          src="./src/images/landing-page-3.jpg"
          alt=""
          className="landing-page-4"
        />
      </section>

      <section id="bnwimageparent">
        <Typography className="bnwText" variant="h1">
          "Darkness cannot drive out darkness; only light can do that. Hate
          cannot drive out hate; only love can do that." –Martin Luther King Jr.
        </Typography>
        <img className="collage" src="./src/images/collage.png" alt="" />
      </section>

        {/* Indias blank template */}

      <section className="className4">
        <img
          src="./src/images/landing-page-3.jpg"
          alt=""
          className="landing-page-5"
        />
      </section>

      <section className="coverageWorth">
        <div className="coverageWorthText">
          <Typography variant="h1">
            How much coverage are your worth?
          </Typography>
          <Typography variant="lead">
            Your news coverage depends on your demographics yada yada we gotta
            do a lil blurb here that segways into take the quiz
          </Typography>
        </div>
        <div className="coverageWorthButton">
          <Button color="red">Take the quiz now</Button>
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
