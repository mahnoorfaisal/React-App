import { HStack, Img } from '@chakra-ui/react'
import logo from "../../assets/logo.png"
import ColorModeSwitch from '../ColorModeSwitch/ColorModeSwitch'


function NavBar() {
  return (
    <div>
      <HStack justifyContent={'space-between'}>
        <Img src={logo} boxSize="50px" />
      
     
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </div>
  )
}

export default NavBar
