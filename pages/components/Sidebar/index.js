import Link from "next/link";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Image,
  Select,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Button onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Frontmentor</DrawerHeader>
          <DrawerBody>
            <Accordion>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      01-qr-code-component-main
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Link href="/01-qr-code-component-main">
                    <a>Index</a>
                  </Link>
                </AccordionPanel>
                <AccordionPanel pb={4}>
                  <Link href="/01-qr-code-component-main/desktop">
                    <a>Layout Desktop</a>
                  </Link>
                </AccordionPanel>
                <AccordionPanel pb={4}>
                  <Link href="/01-qr-code-component-main/mobile">
                    <a>Layout Mobile</a>
                  </Link>
                </AccordionPanel>
              </AccordionItem>
              {/*  */}
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      02-nft-preview-card-component-main
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Link href="/02-nft-preview-card-component-main">
                    <a> Index</a>
                  </Link>
                </AccordionPanel>
                <AccordionPanel pb={4}>
                  <Link href="/02-nft-preview-card-component-main/desktop">
                    <a>Layout Desktop</a>
                  </Link>
                </AccordionPanel>
                <AccordionPanel pb={4}>
                  <Link href="/02-nft-preview-card-component-main/mobile">
                    <a>Layout Mobile</a>
                  </Link>
                </AccordionPanel>
              </AccordionItem>
              {/*  */}
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      03-order-summary-component-main
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Link href="/03-order-summary-component-main">
                    <a> Index</a>
                  </Link>
                </AccordionPanel>
                <AccordionPanel pb={4}>
                  <Link href="/03-order-summary-component-main/desktop">
                    <a>Layout Desktop</a>
                  </Link>
                </AccordionPanel>
                <AccordionPanel pb={4}>
                  <Link href="/03-order-summary-component-main/mobile">
                    <a>Layout Mobile</a>
                  </Link>
                </AccordionPanel>
              </AccordionItem>
              {/*  */}
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
