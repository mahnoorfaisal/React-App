import { Card, CardBody, HStack, Heading, Image} from "@chakra-ui/react";
import { Game } from "../../hooks/useGames";
import PlatformIconsList from "../PlatformIcons/PlatformIconsList";
import CriticScore from "../CriticScore/CriticScore";
import Placeholder from "../../assets/No-Image-Placeholder.svg.webp"

interface Props {
  game: Game;
}
function GameCard({ game }: Props) {
  return (
    <Card>
      <Image  height="150" src={game.background_image?game.background_image:Placeholder} />

      <CardBody>
        <Heading fontSize='medium'  paddingY={2} overflow={"hidden"}>{game.name}</Heading>
        <HStack justify={"space-between"}>
        <PlatformIconsList platforms={game.parent_platforms.map(p=> p.platform)}></PlatformIconsList>
      
        </HStack>
        <CriticScore score={game.metacritic}></CriticScore>
     
      </CardBody>
    </Card>
  );
}

export default GameCard;
