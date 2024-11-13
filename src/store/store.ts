import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { fetchPizzaDataQuery } from "../api/query";
import { Category, PizzaResponseType } from "../definations/types";

export interface PizzaStoreState {
  pizzaData: PizzaResponseType[];
  loading: boolean;
  error: string | null;
  fetchPizzaData: () => Promise<void>;
  category: string;
  setCategory: (c: string) => void;
  rating: number | null;
  setRating: (r: number) => void;
}

const handleError = (set: any, errorMessage: string) => {
  set({ pizzaData: [], loading: false, error: errorMessage });
};

const fetchPizzaData = async (set: any) => {
  set({ loading: true, error: null });
  try {
    const data = await fetchPizzaDataQuery();
    if (data) {
      set({ pizzaData: data, loading: false, error: null });
    } else {
      handleError(set, "Failed To Load Data");
    }
  } catch (error) {
    handleError(set, "Failed To Load Data");
  }
};

const categoryState = (set: any) => ({
  category: Category.ALL,
  setCategory: (c: string) => set({ category: c }),
});

const ratingState = (set: any) => ({
  rating: null,
  setRating: (r: number) => set({ rating: r }),
});

export const usePizzaStore = create<PizzaStoreState>()(
  devtools((set) => ({
    pizzaData: [],
    loading: false,
    error: null,
    fetchPizzaData: () => fetchPizzaData(set),
    ...categoryState(set),
    ...ratingState(set),
  }))
);
