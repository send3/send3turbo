import NextLink from "next/link"
import React from 'react';
import {
  Button,
  ButtonGroup,
} from "@chakra-ui/react";


const links = [
  {name:'All',href:'/'},
  {name:'Drafts',href:'/draft'},
  {name:'RFC',href:'/rfc'},
  {name:'Accepted',href:'/accepted'},
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