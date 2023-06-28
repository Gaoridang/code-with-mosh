import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `'header' 'main' 'footer'`,
          lg: `'header header' 'aside main' 'footer footer'`,
        }}
        gridTemplateRows={}
        gridTemplateColumns={}
        p={5}
      >
        <GridItem area={"header"}>
          <Header />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} bg={"red.400"}>
            Aside
          </GridItem>
        </Show>
        <GridItem area={"main"} bg={"yellow"}>
          Main
        </GridItem>
        <GridItem area={"footer"} bg={"green"}>
          Footer
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
