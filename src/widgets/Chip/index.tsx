import { Chip } from "@mui/material";
import { PIZZACATEGORY } from "../../definations/types";

export default function PizzaCategoryChip({
  category,
  categoryHighlight,
}: PIZZACATEGORY) {
  return (
    <Chip
      label={category}
      sx={{ bgcolor: categoryHighlight, color: "white" }}
    />
  );
}
