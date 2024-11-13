import { Category, FilterTypes, PizzaResponseType } from "../definations/types";

export const wait = (duration: number) =>
  new Promise((resolve) => setTimeout(resolve, duration));

export const formatPrice = (price: number, locale = 'en-IN') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'INR',
  }).format(price*10);
}

export const filterPizzas = (
  data: PizzaResponseType[],
  filters: FilterTypes
): PizzaResponseType[] => {
  const { category, rating } = filters;

  let filteredResp: PizzaResponseType[] = data;

  if (category && category !== Category.ALL) {
    filteredResp = filterDataBasedOnCategory(filteredResp, category);
  }

  if (rating) {
    filteredResp = filterDataBasedOnRating(filteredResp, rating);
  }

  return filteredResp;
};

const filterDataBasedOnCategory = (
  data: PizzaResponseType[],
  category: string
): PizzaResponseType[] => {
  let resp = data.filter((obj) => obj.category === category);
  return resp;
};

const filterDataBasedOnRating = (
  data: PizzaResponseType[],
  rating: number
): PizzaResponseType[] => {
  let resp = data.filter((obj) => obj.rating === rating);
  return resp;
};
