import { Box, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import MainFrame from '../MainFrame'
import CategoryTabs from '../../FunctionalComponents/CategoryTabs'
import Menubar from "../../FunctionalComponents/Menubar"
import { useDispatch, useSelector } from "react-redux"


const Products = () => {
  const productData = useSelector(state => state.products)
  const dispatch = useDispatch();

  return (
    <MainFrame>
      <VStack w="100%" gap={8} >
        <Heading mt={4} fontSize="xx-large" fontWeight={600} >Introducing Our Products</Heading>
        {/* <CategoryTabs/> */}
        <Menubar />
      </VStack>
    </MainFrame>
  )
}

export default Products
