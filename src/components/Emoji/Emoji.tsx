import { Image, ImageProps } from '@chakra-ui/react'
import thumbsUp from '../../assets/thumbsUp.jpg'
import hundred from '../../assets/hundred.jpg'
import meh from '../../assets/meh.png'
interface Props{
    rating:number
}
function Emoji({rating}:Props) {

    const emojiMap:{[key:number] : ImageProps}={
        3:{src:meh, alt:"meh"},
        4:{src:thumbsUp, alt:"recommended"},
        5:{src:hundred, alt:"exceptional"}
    }

    if(rating < 3) return null
  return (
   <Image marginTop={5} {...emojiMap[rating]} boxSize={'25px'}></Image>
  )
}

export default Emoji
