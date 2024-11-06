import { ThemeProvider } from "@emotion/react";
import { useEffect } from "react";
import "./App.css";
import { usePizzaStore } from "./store/store";
import { theme } from "./theme/theme";
import Container from "./widgets/Container";
import ContentHeader from "./widgets/ContentHeader";
import Navigation from "./widgets/Header";
import ScrollerDown from "./widgets/ScrollDown";
import CategoryDeck from "./components/CategoryDeck";

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
              <CategoryDeck />
            </Container>
            <ScrollerDown />
          </main>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
