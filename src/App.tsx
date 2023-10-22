import { Grid, GridItem, Show } from "@chakra-ui/react";
import React from "react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/genreList";

const App = () => {
  return (
    <div>
      <Grid
        templateAreas={{ base: `"nav""main"`, lg: `"nav nav""aside main"` }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            <GenreList />
          </GridItem>
        </Show>

        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
