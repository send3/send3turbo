import type { NextPage } from "next";
import useTokenGated from "lib/useTokenGated";
import Layout from "components/Layout";

import {
  Box,
  Flex,
  Heading,
  Spacer,
  VStack,
  Text,
  StackDivider,
} from "@chakra-ui/react";
import SendReceivePage from "../components/SendReceivePage";
import styles from "../styles/Home.module.css";

const Page: NextPage = () => {
  const badgeAddress = process.env.NEXT_PUBLIC_BADGE_ADDRESS || "";
  useTokenGated(badgeAddress, true);

  return (
    <Box className={styles.backgroundimage}>
      <Box className={styles.backgroundColor}>
        <Layout>
          <VStack align="stretch" spacing={5}>
            <Flex>
              {/* <SendReceivePage></SendReceivePage> */}
              <Spacer />
            </Flex>
          </VStack>
        </Layout>
      </Box>
    </Box>
  );
};

export default Page;
