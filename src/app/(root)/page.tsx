import { getCars } from "../actions/carsActions";
import { Hero, HowItWorks, PopularCars } from "../components";

const Home = async () => {
  const results = await getCars();
  return (
    <div>
      <Hero />
      <HowItWorks />
      {results && <PopularCars results={results} />}
    </div>
  );
};

export default Home;
