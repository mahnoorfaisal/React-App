import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { useRef } from "react";

interface Props {
  onSearch: (searchString: string | undefined) => void;
}

function SearchInput({ onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(ref.current?.value)
        if (ref.current) onSearch(ref.current?.value.toString());
      }}
    >
      <InputGroup>
        <InputLeftElement children={<FaSearch></FaSearch>}></InputLeftElement>
        <Input
          borderRadius={20}
          placeholder="Search games...."
          variant={"filled"}
          ref={ref}
        ></Input>
      </InputGroup>
    </form>
  );
}

export default SearchInput;
