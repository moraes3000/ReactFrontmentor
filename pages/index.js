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
  Image
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      Home
    </div>
  );
}
