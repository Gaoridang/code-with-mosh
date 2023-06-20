import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";
import MovieGrid from "./components/MovieGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header" "main" "footer"`,
        md: `"header header" "nav main" "footer footer"`,
      }}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={{
        base: "1fr",
        md: "150px 1fr",
      }}
    >
      <GridItem area={"header"}>
        <Header />
      </GridItem>
      <GridItem area={"main"}>
        <MovieGrid />
      </GridItem>
      <Show above="md">
        <GridItem area={"nav"}>Nav</GridItem>
      </Show>
      <GridItem area={"footer"}>Footer</GridItem>
    </Grid>
  );
}

export default App;
