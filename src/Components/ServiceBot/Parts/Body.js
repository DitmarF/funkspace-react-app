import styled from "styled-components"

const StyledBody = styled.g`
    rect {
        fill: ${({theme}) => theme.colors.dark};
        stroke: ${({theme}) => theme.colors.bright};
    }
`;

function Body(){

    return(
       <StyledBody id='ServiceBot__Body'>
    
            <rect id='ServiceBot__Body--Container'
                x='10' y='70' rx='2' ry='2' width='50' height='50'
                transform="rotate(0 35 95)" strokeWidth='1'
            />

       </StyledBody>
    )

}

export default Body;