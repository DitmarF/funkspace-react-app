import styled from "styled-components";
import Eyelid from "./EyeParts/Eyelid";

const StyledEye = styled.g`

    .sclera {
        fill: ${({theme}) => theme.colors.semiWhite};
    }

    .iris {
        fill: ${({theme}) => theme.colors.semiBright};
        stroke: ${({theme}) => theme.colors.semiBlack};
    }

    .pupil {
        fill: ${({theme}) => theme.colors.black};
        stroke: ${({theme}) => theme.colors.semiWhite};
    } 

`;

function Eye(){

    return(
        <StyledEye>

           <Eyelid>

                <circle id="ServiceBot__Eye--Sclera" className="sclera"
                    cx="35" cy="30" r="15" 
                />

                <circle id="ServiceBot__Eye--iris" className="iris"
                    cx="35" cy="30" r="7.5" strokeWidth='.5'
                />

                <circle id="ServiceBot__Eye--pupil" className="pupil"
                    cx="35" cy="30" r="2.5" strokeWidth='.25'
                />

           </Eyelid>

        </StyledEye>
    )

}

export default Eye;