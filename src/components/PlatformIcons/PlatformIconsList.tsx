import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../../hooks/useGames";
import{FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from "react-icons/fa";
import {MdPhoneIphone} from "react-icons/md";
import {SiNintendo} from "react-icons/si";
import {BsGlobe} from "react-icons/bs";
import { IconType } from "react-icons/lib";

interface Props {
  platforms: Platform[];
}

function PlatformIconsList({ platforms }: Props) {

  const iconMap: {[key:string]: IconType}={
    pc:FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    linux: FaLinux,
    mac:FaApple,
    ios:MdPhoneIphone,
    web:BsGlobe,
    androind: FaAndroid

  }
  return (
    <HStack spacing={5}>
   
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.600"></Icon>
      ))}
    </HStack>
  );
}

export default PlatformIconsList;
