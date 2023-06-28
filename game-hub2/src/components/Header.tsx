import { HStack, Link, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <HStack h={"50px"} justify={"space-between"}>
      <Text>LOGO</Text>
      <HStack gap={3}>
        <Link>HOME</Link>
        <Link>ABOUT</Link>
      </HStack>
      <Link>Log in / Sign in</Link>
    </HStack>
  );
};

export default Header;
