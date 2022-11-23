import styled from "styled-components";

const StyledEye = styled.g`

    .skin {
        fill: ${({theme}) => theme.colors.dark};
        stroke: ${({theme}) => theme.colors.semiBright};
    }

    .sclera {
        fill: ${({theme}) => theme.colors.bright};
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
        <StyledEye id='ServiceBot__Eye'>

            <mask id="ServiceBot__Eyelid">
   
                <circle cx="35" cy="30" r="15" fill="white" />

                <ellipse cx="35" cy="30" rx="15" ry="8" />

            </mask>

                <circle id="ServiceBot__Eye--Sclera" className="sclera"
                    cx="35" cy="30" r="15" 
                />

                <circle id="ServiceBot__Eye--iris" className="iris"
                    cx="35" cy="30" r="7.5" strokeWidth='.5'
                />

                <circle id="ServiceBot__Eye--pupil" className="pupil"
                    cx="35" cy="30" r="2.5" strokeWidth='.25'
                />

            <circle id="ServiceBot__Eyelid--Skin" className="skin"
                cx="35" cy="30" r="15" strokeWidth='1'
                mask="url(#ServiceBot__Eyelid)"
            />


        </StyledEye>
    )

}

export default Eye;