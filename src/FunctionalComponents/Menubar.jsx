import { Box, Button, HStack, Text } from '@chakra-ui/react'
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { LuPhoneCall } from "react-icons/lu";
import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger,
} from "../components/ui/menu"


const navigations = [
    { id: 1, navName: "Home", hasDropdown: true, path: "/" },
    { id: 2, navName: "Shop", hasDropdown: true, path: "/shop" },
    { id: 3, navName: "Pages", hasDropdown: true, path: "/pages" },
    { id: 4, navName: "Blog", hasDropdown: true, path: "/blog" },
    { id: 5, navName: "About Us", hasDropdown: false, path: "/about" },
    { id: 6, navName: "Contact Us", hasDropdown: false, path: "/contact" },
];

const Menubar = () => {

    return (
        <HStack justifyContent="space-between" bgColor="#f2f2f2" px="6rem" py={2}>
            <HStack gap={8} width="70%">
                <MenuRoot>
                    <MenuTrigger asChild>
                        <Button borderRadius="none" color="#fff" fontSize="xs" bgColor="#00B207" >
                            <IoMenu />
                            All Categories
                            <MdKeyboardArrowDown />
                        </Button>
                    </MenuTrigger>
                    <MenuContent  >
                        <MenuItem _hover={{ bgColor: "#00B207", color: "#fff" }} color="#1A1A1A" value="new-txt">Fresh Fruit</MenuItem>
                        <MenuItem _hover={{ bgColor: "#00B207", color: "#fff" }} color="#1A1A1A" value="new-file">Vegetables</MenuItem>
                        <MenuItem _hover={{ bgColor: "#00B207", color: "#fff" }} color="#1A1A1A" value="new-win">River Fish</MenuItem>
                        <MenuItem _hover={{ bgColor: "#00B207", color: "#fff" }} color="#1A1A1A" value="open-file">Chicken & Meat</MenuItem>
                        <MenuItem _hover={{ bgColor: "#00B207", color: "#fff" }} color="#1A1A1A" value="export">Drink & Water</MenuItem>
                        <MenuItem _hover={{ bgColor: "#00B207", color: "#fff" }} color="#1A1A1A" value="import">Yogurt & Ice Cream</MenuItem>
                    </MenuContent>
                </MenuRoot>

                <HStack gap={3} spacing={6}>
                    {navigations.map((item) => (

                        <HStack gap={1} key={item.id} spacing={1}>
                            <Text _hover={{ color: "#00B207", cursor: "pointer", fontWeight: 600 }} color="#808080" fontSize="sm" fontWeight={500} >{item.navName}</Text>
                            {item.hasDropdown && <MdKeyboardArrowDown color="black" />}
                        </HStack>
                    ))}
                </HStack>
            </HStack>
            <HStack>
                <LuPhoneCall size={"20px"} color='#000' />
                <Text fontWeight={800} fontSize="sm" color="#000">(219) 555-0114</Text>
            </HStack>
        </HStack>
    )
}

export default Menubar
