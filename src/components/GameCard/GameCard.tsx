import { Card, CardBody, HStack, Heading, Image} from "@chakra-ui/react";
import { Game } from "../../hooks/useGames";
import PlatformIconsList from "../PlatformIcons/PlatformIconsList";
import CriticScore from "../CriticScore/CriticScore";
import Placeholder from "../../assets/No-Image-Placeholder.svg.webp"
import Emoji from "../Emoji/Emoji";

interface Props {
  game: Game;
}
function GameCard({ game }: Props) {
  return (
    <Card>
      <Image  height="150" src={game.background_image?game.background_image:Placeholder} />

      <CardBody>
      
        <HStack justify={"space-between"}>
        <PlatformIconsList platforms={game.parent_platforms.map(p=> p.platform)}></PlatformIconsList>
        <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        
        <Heading fontSize='medium'  paddingY={2} overflow={"hidden"}>{game.name} {<Emoji rating={game.rating_top}></Emoji>}</Heading>
     
      </CardBody>
    </Card>
  );
}

export default GameCard;
