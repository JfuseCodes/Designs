import {
    Menu,
    Button,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
export default function SideMenu() {
    return (
    <Menu closeOnSelect={false}>
        <MenuButton as={Button} colorScheme='blue'>
            Filter
        </MenuButton>
        <MenuList minWidth='240px'>
            <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
                <MenuItemOption value='asc'>Ascending</MenuItemOption>
                <MenuItemOption value='desc'>Descending</MenuItemOption>
            </MenuOptionGroup>
            <MenuDivider />
            <MenuOptionGroup title='Country' type='checkbox'>
            <MenuItemOption value='email'>Email</MenuItemOption>
            <MenuItemOption value='phone'>Phone</MenuItemOption>
            <MenuItemOption value='country'>Country</MenuItemOption>
            </MenuOptionGroup>
        </MenuList>
    </Menu>)
}