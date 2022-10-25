import type { NextPage } from "next";
import Layout from "components/Layout";
import {
  Box,
  Flex,
  Spacer,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import { useDrafts } from "lib/useDrafts";
import useTokenGated from "lib/useTokenGated";
import ProposalButton from "components/NewProposalButton";
import ProposalRow from "components/ProposalRow";
import Navbuttons from "components/Navbuttons";

const Draft: NextPage = () => {
  const badgeAddress = process.env.NEXT_PUBLIC_BADGE_ADDRESS || "";
  useTokenGated(badgeAddress, true);
  const { drafts } = useDrafts();

  return (
    <Layout>
      <VStack align="stretch" spacing={5}>
        <Flex>
          <Navbuttons page="Drafts" />
          <Spacer />
          <ProposalButton />
        </Flex>
        <VStack
          align="stretch"
          divider={<StackDivider />}
          borderWidth="1px"
          borderRadius="lg"
        >
          {drafts && drafts.length > 0 ? (
            drafts.map((p) => <ProposalRow key={p.id} {...p} />)
          ) : (
            <Box>No Proposals</Box>
          )}
        </VStack>
      </VStack>
    </Layout>
  );
};

export default Draft;
