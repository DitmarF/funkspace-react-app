import styled from "styled-components";

const StyledEye = styled.g`

    .skin {
        fill: ${({theme}) => theme.colors.dark};
        stroke: ${({theme}) => theme.colors.semiBright};
    }

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
        <StyledEye id='ServiceBot__Eye' >

            <mask id="ServiceBot__Eyelid">
   
                <circle cx="35" cy="30" r="15" fill="white" />

                <path id="ServiceBot__EyelidGap--top" d="M20,30c0,0,1-8,15-8s15,8,15,8H20z"/>
                <path id="ServiceBot__EyelidGap--bottom" d="M50,30c0,0-1,8-15,8S20,30,20,30"/> 

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

            {/* 
                <path id="Top1" d="M20,30c0,0,1-15,15-15s15,15,15,15H20z"/>
                <path id="Top2" d="M20,30c0,0,1-14,15-14s15,14,15,14H20z"/>	
                <path id="Top3" d="M20,30c0,0,1-13,15-13s15,13,15,13H20z"/>

                <path id="Bottom1" d="M50,30c0,0-1,15-15,15S20,30,20,30"/>
                <path id="Bottom2" d="M50,30c0,0-1,14-15,14S20,30,20,30"/>
                <path id="Bottom3" d="M50,30c0,0-1,13-15,13S20,30,20,30"/> 
            */}



        </StyledEye>
    )

}

export default Eye;