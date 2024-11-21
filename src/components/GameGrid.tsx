import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";


function GameGrid() {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGames();
  // console.log(typeof data);
  const skeletons = [];

  for (let i = 0; i <= 20; i++) {
    skeletons.push(i);
  }

  if (error) return <Text>{error.message} </Text>;

  return (
    <Box padding={10}>
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
    >
      {isLoading &&
        skeletons.map((Skeleton) => (
          <GameCardContainer key={Skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}

      {data?.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page.results.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
        </React.Fragment>
      ))}
    </SimpleGrid>
   {hasNextPage && <Button onClick={()=> fetchNextPage() } marginY={5} > {isLoading ? 'Loading':'Load More'} </Button>}
    </Box>
  );
}

export default GameGrid;
