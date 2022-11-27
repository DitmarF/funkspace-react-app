import styled from "styled-components"
import { transformRotateCenter } from "../../../../utils/svgUtils";

const StyledMouth = styled.g`
    #ServiceBot__MouthTest {
        fill: ${({theme}) => theme.colors.bright};
        stroke: ${({theme}) => theme.colors.neutral};
    }
`;

function Mouth() {

    return (
        <StyledMouth id='ServiceBot__Mouth'>

            <defs>
                <pattern id="test" viewBox="0,0,10,10" width="12.5%" height="12.5%">

                    <circle cx="5" cy="5" r="4"  />    
                </pattern>
            </defs>

            <rect id='ServiceBot__MouthTest' 
                x='28.75' y='50' width='12.5' height='12.5' strokeWidth='.5' rx='2' ry='2'
                transform={transformRotateCenter('45', '28.75', '50', '12.5', '12.5')}
            />

            <circle cx="35" cy="56.25" r="5.5" fill="url(#test)"/>    


        </StyledMouth>
    )

}

export default Mouth;