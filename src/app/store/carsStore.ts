import create from 'zustand';
import { getCars } from '../actions/carsActions';
import { ICar } from '../types/CarType';


type CarStore = {
    cars: ICar[];
    fetchCars: () => Promise<void>;
}
const useCarStore = create<CarStore>((set) => ({
    cars: [],
    fetchCars: async () => {
      const { cars } = await getCars();
      set({ cars });
    },
  }));

export default useCarStore;