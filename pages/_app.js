import { ChakraProvider } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import { Container } from "@chakra-ui/react";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Sidebar />
      {/* <Container> */}
      <Component {...pageProps} />
      {/* </Container> */}
    </ChakraProvider>
  );
}

export default MyApp;
