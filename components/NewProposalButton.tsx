import { Button, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";

const ProposalButton = () => {
  return (
    <Link href="/new" passHref>
      <Button colorScheme="blue" leftIcon={<Icon as={FiPlus} />}>
        New Proposal
      </Button>
    </Link>
  );
};

export default ProposalButton;
