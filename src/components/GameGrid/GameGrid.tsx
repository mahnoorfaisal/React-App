import React from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";
import GameCardContainer from "../GameCardContainer/GameCardContainer";

function GameGrid() {
  const { games, errors, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5];
  return (
    <div>
      {errors && <Text>{errors}</Text>}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={3} padding="3px">
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {games?.map((game) => (
          <GameCardContainer>
            {" "}
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default GameGrid;
