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
              <Heading size="md" as="h1">
                EY BIP Tracker
              </Heading>
            </Box>

            <ButtonGroup variant="link" colorScheme="blue" spacing="20px">
              <Link href="/" passHref>
                <Button isActive>Proposals</Button>
              </Link>

              <Link href="/" passHref>
                <Button>My Proposals</Button>
              </Link>
            </ButtonGroup>

            <Spacer />

            <ConnectButton />
          </Flex>
        </Container>
      </Box>

      <Box pb="3rem">
        <Container as="main" maxW="container.lg">
          {children}
        </Container>
      </Box>
    </VStack>
  );
}
