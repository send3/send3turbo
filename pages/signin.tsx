import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Spacer,
  StackDivider,
  VStack,
  Text,
  Icon,
  CircularProgress,
} from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { FiLock, FiImage } from "react-icons/fi";
import useTokenGated from "lib/useTokenGated";

const Page: NextPage = () => {
  const badgeAddress = process.env.NEXT_PUBLIC_BADGE_ADDRESS || "";
  const router = useRouter();
  const { isAuthenticated, isLoading, hasToken } = useTokenGated(badgeAddress);
  const { redirect } = router.query;
  const redirectTo = redirect ? (redirect as string) : "/";

  if (hasToken) router.push(redirectTo);

  return (
    <Container pt="25vh">
      <Box borderWidth="1px" borderRadius="lg" padding="20px">
        <VStack align="stretch" divider={<StackDivider />} spacing={5}>
          <Flex align="center">
            <Heading size="md" as="h1">
              <Icon as={FiLock} /> Sign In
            </Heading>

            <Spacer />

            <ConnectButton showBalance={false} />
          </Flex>

          {!isLoading ? (
            <Flex align="center" gap="30px">
              <Center
                backgroundColor="lightgray"
                width="150px"
                height="200px"
                flexShrink="0"
              >
                <Icon as={FiImage} color="darkgrey" boxSize="2rem" />
              </Center>

              <VStack spacing={5}>
                <Text fontSize="2xl">
                  An EY Blockchain Badge is required to access this site
                </Text>
                {isAuthenticated ? (
                  <Text>
                    If you are part of the team and need to be issued your badge
                    NFT, you may request one by emailing ___________.
                  </Text>
                ) : (
                  <Text>
                    If you have been issued a badge, connect your wallet to
                    continue.
                  </Text>
                )}
              </VStack>
            </Flex>
          ) : (
            <Box textAlign="center" py="3rem">
              <CircularProgress isIndeterminate size="5rem" thickness="5px" />
            </Box>
          )}
        </VStack>
      </Box>
    </Container>
  );
};

export default Page;
