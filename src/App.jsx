import { Box } from "@chakra-ui/react"
import Header from "./FunctionalComponents/Header/Header"
import Menubar from "./FunctionalComponents/Menubar"


const App = () => {
  return (
    <Box bgColor="#fff" h="100vh" >
      <Header />
      <Menubar/>
    </Box>
  )
}

export default App
