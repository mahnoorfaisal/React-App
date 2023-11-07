import { Card, CardBody, Heading, Image} from "@chakra-ui/react";
import { Game } from "../../hooks/useGames";
import PlatformIconsList from "../PlatformIcons/PlatformIconsList";

interface Props {
  game: Game;
}
function GameCard({ game }: Props) {
  return (
    <Card  borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />

      <CardBody>
        <Heading fontSize={"1xl"}>{game.name}</Heading>
       <PlatformIconsList platforms={game.parent_platforms.map(p=> p.platform)}></PlatformIconsList>
      </CardBody>
    </Card>
  );
}

export default GameCard;
