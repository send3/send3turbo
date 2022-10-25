import type { NextPage } from "next";
import Layout from "components/Layout";
import Navbuttons from "components/Navbuttons";
import useTokenGated from "lib/useTokenGated";
import { Flex, Spacer } from "@chakra-ui/react";
import ProposalButton from "components/NewProposalButton";

const Accepted: NextPage = () => {
  const badgeAddress = process.env.NEXT_PUBLIC_BADGE_ADDRESS || "";
  useTokenGated(badgeAddress, true);

  return (
    <Layout>
      <Flex>
        <Navbuttons page="Accepted" />
        <Spacer />
        <ProposalButton />
      </Flex>
    </Layout>
  );
};

export default Accepted;
