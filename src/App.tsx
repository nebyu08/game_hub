import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NabBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatFormSelector from "./components/PlatFormSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";



function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" `,
        lg: `"nav nav " "aside main" `,
      }}
      templateColumns={{
        base: `1fr`,
        lg: `200px 1fr`,
      }}
    >
      <GridItem area="nav">
        <NabBar/>
  
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList/>

        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={15}>
          <GameHeading/>
          <HStack spacing={5} paddingLeft={35}>
            <PlatFormSelector/>
            <SortSelector/>
          </HStack>
          <GameGrid/>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
