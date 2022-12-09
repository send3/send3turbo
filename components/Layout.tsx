import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { ReactNode } from "react";
import styles from "../styles/Home.module.css";
import SendReceivePage from "./SendReceivePage";

type LayoutProps = {
  children?: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <VStack align="stretch" spacing="2rem">
      <Box py="15px" borderBottom="1px solid lightgrey">
        <Container maxW="container.lg">
          <Flex alignItems="baseline" gap="40px">
            <Box>
              <Heading size="md" as="h1" className={styles.name}>
                send3
              </Heading>
            </Box>

            <ButtonGroup variant="link" colorScheme="blue" spacing="20px">
              <Link href="/" passHref>
                <Button isActive>Home</Button>
              </Link>

              <Link href="/" passHref>
                <Button>FAQ</Button>
              </Link>
            </ButtonGroup>

            <Spacer />

            <ConnectButton />
          </Flex>
        </Container>
      </Box>

      <Box pb="3rem">
        {/* <SendReceivePage></SendReceivePage> */}
        <Container as="main" maxW="container.lg">
          {children}
        </Container>
      </Box>
    </VStack>
  );
}
