import { Card, CardBody, HStack, Heading, Image} from "@chakra-ui/react";
import { Game } from "../../hooks/useGames";
import PlatformIconsList from "../PlatformIcons/PlatformIconsList";
import CriticScore from "../CriticScore/CriticScore";

interface Props {
  game: Game;
}
function GameCard({ game }: Props) {
  return (
    <Card>
      <Image src={game.background_image} />

      <CardBody>
        <Heading fontSize={"1xl"}>{game.name}</Heading>
        <HStack justify={"space-between"}>
        <PlatformIconsList platforms={game.parent_platforms.map(p=> p.platform)}></PlatformIconsList>
       <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
     
      </CardBody>
    </Card>
  );
}

export default GameCard;
