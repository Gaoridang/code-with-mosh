import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header" "main" "footer"`,
        md: `"header header" "nav main" "nav footer"`,
      }}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={{
        base: "1fr",
        md: "150px 1fr",
      }}
    >
      <GridItem area={"header"} bg={"orange.300"}>
        <Header />
      </GridItem>
      <GridItem area={"main"} bg={"pink.300"}>
        Main
      </GridItem>
      <Show above="md">
        <GridItem area={"nav"} bg={"green.300"}>
          Nav
        </GridItem>
      </Show>
      <GridItem area={"footer"} bg={"blue.300"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
