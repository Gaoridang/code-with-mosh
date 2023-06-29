import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";

const GameCardSkeletons = () => {
  const skeletons = [1, 2, 3, 4, 5, 6];

  return skeletons.map((_, i) => (
    <GameCardContainer key={i}>
      <Card height={"300px"}>
        <Skeleton />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </GameCardContainer>
  ));
};

export default GameCardSkeletons;
