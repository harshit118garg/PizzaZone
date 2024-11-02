export interface PizzaResponseType {
  id: number;
  image: Image;
  name: string;
  description: string;
  price: number;
  category: Category;
  availability: boolean;
  tags: Array<null | string>;
  rating: number;
}

export enum Category {
  Gourmet = "Gourmet",
  Meat = "Meat",
  Seafood = "Seafood",
  Spicy = "Spicy",
  Vegan = "Vegan",
  Vegetarian = "Vegetarian",
}

export interface Image {
  id: string;
  width: number;
  height: number;
  title: string;
  url: string;
}
