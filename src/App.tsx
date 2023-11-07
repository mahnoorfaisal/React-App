import { Grid , GridItem} from "@chakra-ui/react";
import GameGrid from "./components/GameGrid/GameGrid";
import NavBar from "./components/NavBar/NavBar";


function App() {
  return (
     <Grid templateAreas={{ base: `"nav" "main"` , lg:`"nav nav" "aside main"`}}>
      <GridItem area="nav" >
        <NavBar></NavBar>
      </GridItem>
      <GridItem area="aside">
        Aside
      </GridItem>
      <GridItem area="main">
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
