import { getCars } from "../actions/carsActions";
import { Hero, HowItWorks, PopularCars } from "../components";
import Footer from "../components/Footer/Footer";

const Home = async () => {
  const results = await getCars();

  return (
    <>
      <Hero />
      <HowItWorks />
      {results && <PopularCars results={results} />}
    </>
  );
};

export default Home;
