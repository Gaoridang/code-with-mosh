import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeletons = () => {
  const skeletons = [1, 2, 3, 4, 5, 6];

  return skeletons.map((s, i) => (
    <Card key={i}>
      <Skeleton />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  ));
};

export default GameCardSkeletons;
