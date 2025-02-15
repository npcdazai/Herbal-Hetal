import React from 'react'
import MainFrame from '../components/MainFrame'
import { Image, Text, VStack } from '@chakra-ui/react'
import error from "../assets/bg/Illustration.svg"

const Error = () => {
    return (
        <MainFrame>
            <VStack p={6} >
                <Image src={error} h="354.03px" w="582.72px" />
                <VStack>
                    <Text color="#1A1A1A" fontSize="40px" fontWeight={600} >
                        Oops! page not found
                    </Text>
                    <Text as="span" color="#808080" fontWeight={400} fontSize={"sm"} >
                        Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor at metus mollis
                    </Text>
                </VStack>
            </VStack>
        </MainFrame>
    )
}

export default Error
