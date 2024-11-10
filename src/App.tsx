import { ThemeProvider } from "@emotion/react";
import { useEffect } from "react";
import "./App.css";
import CategoryDeck from "./components/CategoryDeck";
import PizzaDeck from "./components/PizzaDeck";
import { usePizzaStore } from "./store/store";
import { theme } from "./theme/theme";
import Container from "./widgets/Container";
import ContentHeader from "./widgets/ContentHeader";
import Navigation from "./widgets/Header";
import Loader from "./widgets/Loader";
import ScrollerDown from "./widgets/ScrollDown";
import { Typography } from "@mui/material";

function App() {
  const { pizzaData, error, loading, fetchPizzaData } = usePizzaStore();

  console.log({ pizzaData, error, loading });

  useEffect(() => {
    fetchPizzaData();
  }, [fetchPizzaData]);

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
