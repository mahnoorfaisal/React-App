import useGenres, { Genre } from "../../hooks/useGenres";
import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";


interface Props{
    onSelectGenre: (genre:Genre)=> void
}
function GenreList({onSelectGenre}: Props) {
  const { genres, errors, isLoading } = useGenres();
 
  if (isLoading) return <Spinner />;
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={genre.image_background}
            ></Image>
            <Button variant='link' fontSize='smaller' onClick={()=>onSelectGenre(genre)}>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
