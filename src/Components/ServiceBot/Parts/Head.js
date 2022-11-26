import styled from "styled-components"
import Mouth from "./HeadParts/Mouth";
import Eye from "./HeadParts/Eye";
import { transformRotateCenter } from "../../../utils/svgUtils";

const StyledHead = styled.g`
    rect {
        fill: ${({theme}) => theme.colors.dark};
        stroke: ${({theme}) => theme.colors.bright};
    }
`;

function Head(){

    return(
       <StyledHead id='ServiceBot__Head'>
    
            <rect id='ServiceBot__Head--Container'
                x='10' y='10' width='50' height='50' strokeWidth='1' rx='2' ry='2' 
                transform={transformRotateCenter('45', '10', '10', '50', '50')} 
            />

            <Eye />

            <Mouth />

       </StyledHead>
    )

}

export default Head;