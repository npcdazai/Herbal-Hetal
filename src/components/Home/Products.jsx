import { Box, Button, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import MainFrame from '../MainFrame'
import CategoryTabs from '../../FunctionalComponents/CategoryTabs'
import Menubar from "../../FunctionalComponents/Menubar"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../../features/products/productSlice"

const Products = () => {
  const disptach = useDispatch();

  return (
    <MainFrame>
      <VStack w="100%" gap={8} >
        <Heading mt={4} fontSize="xx-large" fontWeight={600} >Introducing Our Products</Heading>
        {/* <CategoryTabs/> */}
        <Menubar />

        <Button onClick={e => disptach(fetchProducts())} >HELLO DATA</Button>
      </VStack>
    </MainFrame>
  )
}

export default Products
