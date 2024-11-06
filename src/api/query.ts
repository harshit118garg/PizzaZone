import { API_URL } from "../definations/constants";
import { PizzaResponseType } from "../definations/types";
import { wait } from "../utils/helper";

export const fetchPizzaData = async (): Promise<PizzaResponseType[]> => {
  try {
    await wait(3000);
    const response = await fetch(`${API_URL}/pizzas.json`);
    if (!response.ok) throw new Error("Failed to get pizza's data from API");
    return await response.json();
  } catch (error) {
    throw new Error("there is some problem in fetchPizzaData function");
  }
};
