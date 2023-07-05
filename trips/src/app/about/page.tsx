import Trips from "./components/Trips";

export const metadata = {
  title: "About",
};

const About = async () => {
  return (
    <>
      <h1>About</h1>
      <Trips />
    </>
  );
};

export default About;
