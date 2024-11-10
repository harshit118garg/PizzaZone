import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { PizzaResponseType } from "../../definations/types";
import PizzaCard from "../../widgets/PizzaCard";

interface PizzaDeckProps {
  pizzaData: PizzaResponseType[];
}

export default function PizzaDeck({ pizzaData }: PizzaDeckProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        columnSpacing={2}
        rowSpacing={3}
        columns={{ lg: 16, md: 12, sm: 6, xs: 1 }}
      >
        {pizzaData.map((pizza) => {
          return (
            <Grid size={{ lg: 4, md: 4, sm: 3, xs: 1 }}>
              <PizzaCard key={pizza.id} {...pizza} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
