import { Text } from "@chakra-ui/react";
import { ParentPlatform } from "../hooks/useGames";

interface Props {
  platforms: ParentPlatform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <Text>
      {platforms.map((platform) => (
        <li key={platform.platform.id}>{platform.platform.name}</li>
      ))}
    </Text>
  );
};

export default PlatformIconList;
