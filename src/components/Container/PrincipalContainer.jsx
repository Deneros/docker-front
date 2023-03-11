import React from "react";
import {styled, Container} from "@nextui-org/react";

const StyledContainer = styled(Container,{
    backgroundColor:"#555555",
    position:"relative",
    height:"100%",
    width:"100%",
    zIndex:"-1"
    
})

function PrincipalContainer(){
    return(
        <StyledContainer />
            
        
    )
}

export default PrincipalContainer
