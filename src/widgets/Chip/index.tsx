import { Button } from "@mui/material";
import { PIZZACATEGORY } from "../../definations/types";

export default function PizzaCategoryChip({
  category,
  categoryHighlight,
}: PIZZACATEGORY) {
  return (
    <Button
      type="button"
      size="small"
      sx={{
        bgcolor: categoryHighlight,
        color: "white",
        borderRadius: "25px",
        padding: "0.25rem",
      }}
    >
      {category}
    </Button>
  );
}
