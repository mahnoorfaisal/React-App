import { Menu, MenuButton ,Button, MenuList, MenuItem} from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import React from 'react'
import usePlatforms from '../../hooks/usePlatforms'
import { Platform } from '../../hooks/useGenres'

interface Props{
    onSelectPlatform: (selectedPlatform: Platform)=>void
    selectedPlatform: Platform|null
}

function PlatformSelector({onSelectPlatform, selectedPlatform} : Props) {

    const {platforms, errors, isLoading}= usePlatforms()
  return (
    <Menu >
        <MenuButton as={Button} marginBottom={5} rightIcon={<BsChevronDown/>}>{selectedPlatform?.name||'Platforms'}</MenuButton>
        <MenuList>
            {platforms.map(p=> <MenuItem key={p.id}  onClick={()=>onSelectPlatform(p) }>{p.name}</MenuItem>)}
        </MenuList>
    </Menu>

  )
}

export default PlatformSelector
