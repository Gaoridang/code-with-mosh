import { Grid, GridItem } from "@chakra-ui/react";

const Header = () => {
  return (
    <Grid
      templateAreas={`"header header" "nav main" "nav footer"`}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
    >
      <GridItem area={"header"} bg={"orange.300"}>
        Header
      </GridItem>
      <GridItem area={"main"} bg={"pink.300"}>
        Main
      </GridItem>
      <GridItem area={"nav"} bg={"green.300"}>
        Nav
      </GridItem>
      <GridItem area={"footer"} bg={"blue.300"}>
        Footer
      </GridItem>
    </Grid>
  );
};

export default Header;
