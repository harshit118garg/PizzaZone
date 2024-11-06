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
import Loader from "./widgets/Loader";

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
                ) : (
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum eaque numquam at illo sequi. Vel ad eius aut dolores
                    molestiae cupiditate? Magnam nemo numquam nisi perferendis
                    doloribus maiores fugit inventore harum soluta libero fugiat
                    ipsa quos rerum sit voluptates voluptas est illum ab at nam,
                    necessitatibus repellendus doloremque qui omnis. Magni nemo,
                    consequatur tempore cupiditate aliquam vel asperiores quis
                    nobis doloribus natus, rem dolores quo in deserunt est
                    voluptatem fugit? Eaque rerum soluta voluptates expedita
                    quis maiores pariatur perferendis quasi obcaecati et
                    asperiores, dignissimos natus sint tempore molestias
                    repellat assumenda adipisci ex quia ratione fugit nesciunt
                    consequatur cum? Quam doloremque iusto modi voluptate
                    aspernatur totam tempora adipisci exercitationem sapiente
                    nisi asperiores voluptatum porro perspiciatis illum in rem,
                    iure quos ut, nam voluptas dolor consectetur error. Ad ipsa,
                    sequi minus maiores aliquid ipsam earum, error tenetur
                    consequuntur molestiae, eveniet dolorum praesentium qui
                    necessitatibus. Quia repellendus, aliquid debitis totam,
                    blanditiis officiis in ipsum quis et, rem quidem cum
                    praesentium. Molestiae nihil inventore ea praesentium
                    aliquid illo voluptate fugiat incidunt impedit? Placeat
                    distinctio eum tenetur tempore rem esse, dolorum quos
                    perferendis excepturi saepe voluptatum perspiciatis? Saepe,
                    magni necessitatibus fuga deleniti consectetur provident
                    distinctio cupiditate sit alias voluptas! Ea et eaque odit
                    maiores iusto!
                  </p>
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
