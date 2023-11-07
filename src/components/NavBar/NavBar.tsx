import { HStack, Img, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";
import SearchInput from "../SearchInput/SearchInput";
interface Props {
  onSearch: (searchString: string | undefined) => void;
}


function NavBar({onSearch}:Props) {
  return (
    <div>
      <HStack padding={2}>
        <Img src={logo} boxSize="50px" />
        <SearchInput onSearch={onSearch}></SearchInput>
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </div>
  );
}

export default NavBar;
