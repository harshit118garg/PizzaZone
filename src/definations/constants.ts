import { Category, PIZZACATEGORY } from "./types";

export const API_URL = `https://harshit118garg.github.io/ODI-Ranking-API-main`;

export const PIZZA_CATEGORIES: PIZZACATEGORY[] = [
  { category: Category.Gourmet, categoryHighlight: "#A57A5B" },
  { category: Category.Meat, categoryHighlight: "#D16D6D" },
  { category: Category.Seafood, categoryHighlight: "#6B9ABF" },
  { category: Category.Spicy, categoryHighlight: "#E07A5F" },
  { category: Category.Vegan, categoryHighlight: "#6DA06D" },
  { category: Category.Vegetarian, categoryHighlight: "#A2B982" },
];
