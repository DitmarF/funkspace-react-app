import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components"
import { rotate } from "../../../utils/gsapUtils";

const StyledBody = styled.g`
    rect {
        fill: ${({theme}) => theme.colors.dark};
        stroke: ${({theme}) => theme.colors.bright};
    }
`;

function Body(){

    const isActive = useSelector(state => state.entrance.isActive);
    const bodyContainer = useRef();

    isActive 
    ? rotate(bodyContainer, '0', '25 25') 
    : rotate(bodyContainer, '45', '25 25');
   
    return(
       <StyledBody id='ServiceBot__Body'>
    
            <rect id='ServiceBot__Body--Container' ref={bodyContainer}
                x='10' y='70' rx='2' ry='2' width='50' height='50'
                strokeWidth='1' transform='rotate(45, 35, 95)'
            />

       </StyledBody>
    )

}

export default Body;