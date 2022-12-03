import styled from "styled-components"
import Mouth from "./HeadParts/Mouth";
import Eye from "./HeadParts/Eye";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { rotate } from "../../../utils/gsapUtils";

const StyledHead = styled.g`
    #ServiceBot__Head--Container {
        fill: ${({theme}) => theme.colors.dark};
        stroke: ${({theme}) => theme.colors.bright};
    }
`;


function Head(){

    const isActive = useSelector(state => state.entrance.isActive);
    const headContainer = useRef();
    
    isActive 
    ? rotate(headContainer, '45', '25, 25', '.75') 
    : rotate(headContainer, '0', '25, 25');
        
    return(

        <StyledHead id='ServiceBot__Head'> 
            <rect id='ServiceBot__Head--Container' ref={headContainer}
                x='10' y='10' width='50' height='50' strokeWidth='1' rx='2' ry='2' 
            />

            <Eye />
            <Mouth />
        </StyledHead>
    )

}

export default Head;