import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  const onSelectGenre = (genre: Genre) => {
    setSelectedGenre(genre);
  };

  return (
    <>
      <Grid
        templateAreas={{
          base: `'header' 'main' 'footer'`,
          lg: `'header header' 'aside main' 'footer footer'`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
        px={5}
      >
        <GridItem area={"header"}>
          <Header />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"}>
            <GenreList
              onSelectGenre={onSelectGenre}
              selectedGenre={selectedGenre}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <Box marginBottom={3}>
            <PlatformSelector
              selectedPlatform={selectedPlatform}
              onSelectPlatform={(platform: Platform) =>
                setSelectedPlatform(platform)
              }
            />
          </Box>
          <GameGrid
            selectedPlatform={selectedPlatform}
            selectedGenre={selectedGenre}
          />
        </GridItem>
        <GridItem area={"footer"} bg={"green"}>
          Footer
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
