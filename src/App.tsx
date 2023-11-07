import { Grid , GridItem, Show} from "@chakra-ui/react";
import GameGrid from "./components/GameGrid/GameGrid";
import NavBar from "./components/NavBar/NavBar";
import GenreList from "./components/GenreList/GenreList";


function App() {
  return (
     <Grid templateAreas={{ base: `"nav" "main"` , lg:`"nav nav" "aside main"`}} templateColumns={{
      base:"1fr",lg:"200px"
     }}>
      <GridItem area="nav" >
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
      <GridItem area="aside" paddingX={5}>
      <GenreList></GenreList>
      </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
