import { Box, Heading, Text } from "@chakra-ui/react";
import { Proposal } from "@prisma/client";

const ProposalRow = (props: Proposal) => {
  return (
    <Box p="20px">
    <Heading size="md">{props.name}</Heading>
    <Text fontSize="xs">by {props.author}</Text>
    <Text>{props.summary}</Text>
  </Box>
  );
};

export default ProposalRow;
