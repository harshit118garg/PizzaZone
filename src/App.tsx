import { ThemeProvider } from "@emotion/react";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import "./App.css";
import CategoryDeck from "./components/CategoryDeck";
import PizzaDeck from "./components/PizzaDeck";
import { usePizzaStore } from "./store/store";
import { theme } from "./theme/theme";
import { filterPizzas } from "./utils/helper";
import Container from "./widgets/Container";
import ContentHeader from "./widgets/ContentHeader";
import Navigation from "./widgets/Header";
import Loader from "./widgets/Loader";
import ScrollerDown from "./widgets/ScrollDown";
import { Category, FilterTypes } from "./definations/types";

function App() {
  const { pizzaData, error, loading, fetchPizzaData, category, rating } =
    usePizzaStore();

  console.log({ pizzaData, error, loading });

  useEffect(() => {
    fetchPizzaData();
  }, [fetchPizzaData]);

  const filters: FilterTypes = {
    ...(category && category !== Category.ALL ? { category } : {}),
    ...(rating ? { rating } : {}),
  };

  if (!loading && error === null) {
    const filteredPizzaData = pizzaData ? filterPizzas(pizzaData, filters) : [];
    console.log({ filteredPizzaData });
  }

  return (
    <>
      <div id="app">
        <ThemeProvider theme={theme}>
          <Navigation />
          <main>
            <ContentHeader />
            <Container>
              <section id="pizzaZone">
                <CategoryDeck />
                {loading ? (
                  <Loader />
                ) : error ? (
                  <Typography variant="h2" color="error">
                    {error}
                  </Typography>
                ) : (
                  <PizzaDeck pizzaData={pizzaData} />
                )}
              </section>
            </Container>
            <ScrollerDown />
          </main>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
