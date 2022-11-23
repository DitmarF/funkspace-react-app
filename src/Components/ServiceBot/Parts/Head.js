import styled from "styled-components"
import Eye from "./HeadParts/Eye";

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
                x='10' y='10' rx='2' ry='2' width='50' height='50'
                transform="rotate(45 35 35)" strokeWidth='1'
            />

            <Eye />

       </StyledHead>
    )

}

export default Head;