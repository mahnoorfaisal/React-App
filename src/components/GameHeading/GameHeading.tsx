import { Heading } from "@chakra-ui/react";
import { Genre } from "../../hooks/useGenres";
import { Platform } from "../../hooks/useGenres";

interface Props {
  genre: Genre | null;
  platform: Platform | null;
}

function GameHeading({ platform, genre }: Props) {
  const heading = `${platform?.name || ''} ${genre?.name|| ''} Games`;
  return <Heading as={"h1"} fontSize={'4xl'}>{heading}</Heading>;
}

export default GameHeading;
