import { getCars } from "../actions/carsActions";
import { Hero, HowItWorks } from "../components";

const Home = async () => {
  const results = await getCars();

  return (
    <div>
      <Hero />
      <HowItWorks />
    </div>
  );
};

export default Home;
