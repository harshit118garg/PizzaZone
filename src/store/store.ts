import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { fetchPizzaDataQuery } from "../api/query";
import { PizzaResponseType } from "../definations/types";

export interface PizzaStoreState {
  pizzaData: PizzaResponseType[];
  loading: boolean;
  error: string | null;
  fetchPizzaData: () => Promise<void>;
}

export const usePizzaStore = create<PizzaStoreState>()(
  devtools((set) => ({
    pizzaData: [],
    loading: false,
    error: null,
    fetchPizzaData: async () => {
      set({ loading: true, error: null });
      try {
        const data = await fetchPizzaDataQuery();
        if (data) {
          set({ pizzaData: data, loading: false, error: null });
        } else {
          set({ pizzaData: [], loading: false, error: "Failed To Load Data" });
        }
      } catch (error) {
        set({ pizzaData: [], loading: false, error: "Failed To Load Data" });
      }
    },
  }))
);
