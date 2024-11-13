import { Button } from "@mui/material";
import { PIZZACATEGORY } from "../../definations/types";
import { usePizzaStore } from "../../store/store";

export default function PizzaCategoryChip({
  category,
  categoryHighlight,
}: PIZZACATEGORY) {
  const { setCategory } = usePizzaStore();

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
      onClick={() => setCategory(category)}
    >
      {category}
    </Button>
  );
}
