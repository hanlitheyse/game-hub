import { Grid, GridItem, Show } from "@chakra-ui/react";
import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/genreList";
import { Genre } from "./hooks/useGenres";

const App = () => {
  const [selectedGenre, setSElectedGenre] = useState<Genre | null>(null);

  return (
    <div>
      <Grid
        templateAreas={{ base: `"nav""main"`, lg: `"nav nav""aside main"` }}
        templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={selectedGenre}
              onSelectGenre={(genre) => setSElectedGenre(genre)}
            />
          </GridItem>
        </Show>

        <GridItem area="main">
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
