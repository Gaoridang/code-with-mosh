import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const onSelectGenre = (genre: Genre) => {
    setGameQuery({ ...gameQuery, genre });
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
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <Box marginBottom={3}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform: Platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
        <GridItem area={"footer"} bg={"green"}>
          Footer
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
