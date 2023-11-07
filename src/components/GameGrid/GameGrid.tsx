import React from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";

function GameGrid() {
  const { games, errors, isLoading } = useGames();
  const skeletons=[1,2,3,4,5]
  return (
    <div>
      {errors && <Text>{errors}</Text>}
     
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
      {isLoading && skeletons.map(skeleton=><GameCardSkeleton key={skeleton}></GameCardSkeleton>)}
        {games?.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default GameGrid;