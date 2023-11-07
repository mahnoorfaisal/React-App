import { Grid , GridItem, Show, Box} from "@chakra-ui/react";
import GameGrid from "./components/GameGrid/GameGrid";
import NavBar from "./components/NavBar/NavBar";
import GenreList from "./components/GenreList/GenreList";
import { useState } from "react";
import { Genre, Platform } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector/PlatformSelector";
import "./index.css"
import GameHeading from "./components/GameHeading/GameHeading";


function App() {

  const [selectedGenre, setSelectedGenre]= useState<Genre| null>(null)
  const [selectedPlatform, setSelectedPlatform]= useState<Platform| null>(null)
  const [searchText, setSearchText]= useState<string|undefined>('')
  return (
     <Grid templateAreas={{ base: `"nav" "main"` , lg:`"nav nav" "aside main"`}} templateColumns={{
      base:"1fr",lg:"200px"
     }}>
      <GridItem area="nav" >
        <NavBar onSearch={(text)=> setSearchText(text)}></NavBar>
      </GridItem>
      <Show above="lg">
      <GridItem area="aside" paddingX={5}>
      <GenreList onSelectGenre={(genre)=> setSelectedGenre(genre)}></GenreList>
      </GridItem>
      </Show>
      <GridItem area="main">
      <Box marginBottom={5}>
        <GameHeading genre={selectedGenre} platform={selectedPlatform}></GameHeading>
        </Box>
        <Box marginRight={5}>
        <PlatformSelector  selectedPlatform={selectedPlatform} onSelectPlatform={(platform)=> setSelectedPlatform(platform)}></PlatformSelector>
        </Box>
        <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} searchText={searchText}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
