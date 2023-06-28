import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `'header' 'main' 'footer'`,
          lg: `'header header' 'aside main' 'footer footer'`,
        }}
        px={5}
      >
        <GridItem area={"header"}>
          <Header />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"}>Aside</GridItem>
        </Show>
        <GridItem area={"main"}>
          <GameGrid />
        </GridItem>
        <GridItem area={"footer"} bg={"green"}>
          Footer
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
