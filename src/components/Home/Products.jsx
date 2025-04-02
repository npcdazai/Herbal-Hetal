import { Box, Button, Grid, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import MainFrame from '../MainFrame'
import CategoryTabs from '../../FunctionalComponents/CategoryTabs'
import Menubar from "../../FunctionalComponents/Menubar"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../../features/products/productSlice"
import { addToCart } from "../../features/cart/cartSlice"
import Bag from "../../assets/icons/Rectangle.svg";

const Products = () => {
  const state = useSelector((state) => state)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log('====================================');
  console.log(state);
  console.log('====================================');

  if (state.isLoading) {
    return <h1>IsLoading</h1>
  }

  const handleAddToCart = (product) => {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.images[0]
    }));
  }

  return (
    <MainFrame>
      <VStack w="100%" gap={8} zIndex={"-1px"} >
        <Heading mt={4} fontSize="xx-large" fontWeight={600} >Introducing Our Products</Heading>
        <Menubar />

        <Grid templateColumns="repeat(4, 1fr)" gap="6" overflowX="hidden" px={6} >
          {state?.productData?.products && state?.productData?.products.map((val) => {
            return (
              <div key={val?.id}>
                <VStack alignItems="flex-start" w="100%" >
                  <Box height="250px" w="250px" position="relative" >
                    <Image src={val?.images[0]} h="100%" w="100%" />
                    <Box bgColor="#EA4B48" color="#fff" py={1} px={2} rounded={"md"} position="absolute" top={2} left={2} >Sale {val?.discountPercentage} %</Box>
                  </Box>
                  <HStack justifyContent="space-between" w="100%" mt={3} px={3} >
                    <VStack alignItems="flex-start" >
                      <Text color="#2B572E" fontSize="xs" fontWeight={700} >{val?.title}</Text>
                      <Text color="#2B572E" fontSize="sm" fontWeight={700} >$ {val?.price}</Text>
                    </VStack>
                    <Button bgColor="#00B207" color="#fff" onClick={() => handleAddToCart(val)} >Add to cart  +</Button>
                  </HStack>
                </VStack>
              </div>
            )
          })}
        </Grid>
      </VStack>
    </MainFrame>
  )
}

export default Products
