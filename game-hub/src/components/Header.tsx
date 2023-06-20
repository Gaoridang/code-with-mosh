import { Flex, Link, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const Header = () => {
  return (
    <>
      <Flex
        px={"6"}
        h={"full"}
        alignItems={"center"}
        justifyContent={"space-between"}
        position={"relative"}
      >
        <Text>LOGO</Text>
        <Flex
          gap={"6"}
          position={"absolute"}
          left={"50%"}
          transform={"translateX(-50%)"}
        >
          <Link>상영작</Link>
          <Link>개봉예정작</Link>
          <Link>인기작</Link>
        </Flex>
        <ColorModeSwitch />
      </Flex>
    </>
  );
};

export default Header;
