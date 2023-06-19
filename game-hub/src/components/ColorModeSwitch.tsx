import { useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <button onClick={toggleColorMode}>
      {colorMode === "dark" ? "Light" : "Dark"}
    </button>
  );
};

export default ColorModeSwitch;
