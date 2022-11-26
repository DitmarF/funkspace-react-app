import styled from "styled-components"
import { transformRotateCenter } from "../../../../utils/svgUtils";

const StyledMouth = styled.g`
    rect {
        fill: ${({theme}) => theme.colors.semiDark};
        stroke: ${({theme}) => theme.colors.semiBright};
    }
`;

function Mouth() {

    return (
        <StyledMouth id='ServiceBot__Mouth'>

            <rect id='ServiceBot__MouthTest' 
                x='28.75' y='50' width='12.5' height='12.5' strokeWidth='.5' rx='2' ry='2'
                transform={transformRotateCenter('45', '28.75', '50', '12.5', '12.5')}
            />

        </StyledMouth>
    )

}

export default Mouth;