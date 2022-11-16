import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Proposal } from "@prisma/client";

const ProposalDetails = (props: {
  detailName: String;
  detailValue: String;
}) => {
  return (
    <Box
      display="flex"
      alignItems="flex-start"
      justifyContent="space-between"
      textAlign="left"
      p={2}
    >
      <Heading flex="1" size="xs">
        {props.detailName}
      </Heading>
      <Text flex="2" fontSize="xs">
        {props.detailValue.toString()}
      </Text>
    </Box>
  );
};

const ProposalRow = (props: Proposal) => {

  const date = new Date(props?.dateProposal?.toString()).toDateString();
    const proposalDetails = [
      { name : "Co-Authors", value: props?.coAuthors },
      { name :"Date Proposed", value: date},
      { name :"Championship Team", value: props?.championshipTeam },
      { name :"Leadership Sponsor", value: props?.leadershipSponsor },
      { name :"Simple Summary/ Abstract", value: props?.summary },
      { name :"Motivation(s)", value: props?.motivation },
      { name :"Specifications", value: props?.specifications },
      { name :"Risks/Impediments", value: props?.risks },
      { name :"Success Metrics", value: props?.successMetrics },
    ];
  
 

  return (
    <Box p="20px">
      <Accordion allowToggle>
        <AccordionItem>
          {/* THE HEADER */}
          <h2>
            <AccordionButton >
              <Box flex="1" textAlign="left">
                <Heading size="md">{props.name}</Heading>
                <Text fontSize="xs">by {props.author}</Text>
                <Text>{props.summary}</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          {/* THE DETAILS */}
          <AccordionPanel pb={4}>
            {proposalDetails.map((each, i) =>(
              <ProposalDetails detailName={each.name} detailValue={each.value}/>
            ))}
            
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default ProposalRow;

//JSON object from the DB

// [
//   {
//       "id": "63587a464852d1a6a7b1aad3",
//       "name": "Malik coin",
//       "author": "0xf42BB9C241EE15B261c4b67e1dd1f7065Ae26736",
//       "coAuthors": "malik",
//       "dateProposal": "2022-10-25T00:00:00.000Z",
//       "championshipTeam": "",
//       "leadershipSponsor": "",
//       "summary": "because i want to be cool",
//       "motivation": "",
//       "specifications": "",
//       "risks": "",
//       "successMetrics": "",
//       "status": "DRAFT"
//   }
// ]

