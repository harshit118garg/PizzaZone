import { Stack } from "@mui/material";
import "./style.css";
import { PIZZA_CATEGORIES } from "../../definations/constants";
import { Fragment } from "react/jsx-runtime";
import PizzaCategoryChip from "../../widgets/Chip";

export default function CategoryDeck() {
  return (
    <div>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        {PIZZA_CATEGORIES.map((c, i) => {
          return (
            <Fragment key={i}>
              <PizzaCategoryChip category={c} />
            </Fragment>
          );
        })}
      </Stack>
    </div>
  );
}
