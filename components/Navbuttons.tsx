import NextLink from "next/link"
import React from 'react';
import {
  Button,
  ButtonGroup,
} from "@chakra-ui/react";


const links = [
  {name:'Drafts',href:'/draft'},
  {name:'RFC',href:'/rfc'},
  {name:'Voting',href:'/voting'},
  {name:'Accepted',href:'/accepted'},
  {name:'Rejected',href:'/rejected'},
];

const Navbuttons = (props: any) => {

    return(<div>
        {links.map((lnk,idx)=>
            <ButtonGroup key={idx} isAttached>
                <NextLink href={lnk.href} passHref>
                 <Button _hover={{ bg: '#DDEAF7' }} bg={lnk.name === props.page ? "#DDEAF7" : "" } >
                    {lnk.name}
                </Button>
                </NextLink>
            </ButtonGroup>
        )}
    </div>)
}

export default Navbuttons;