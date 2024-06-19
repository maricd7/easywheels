import { getCars } from "../actions/carsActions";
import { Hero } from "../components";

const Home = async () => {
  const results = await getCars();

  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;
