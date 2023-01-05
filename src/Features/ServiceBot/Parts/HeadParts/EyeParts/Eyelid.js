import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import styled from "styled-components"

const StyledEye = styled.g`

    .skin {
        fill: ${({theme}) => theme.colors.dark};
        stroke: ${({theme}) => theme.colors.semiBright};
    }

`;

function Eyelid(props){

    const lidTop = useRef();

    return(
        <StyledEye id="ServiceBot__Eye">
            <mask id="ServiceBot__Eyelid">
   
                <circle cx="35" cy="30" r="15" />

                <rect x='17.5' y='0' rx='0' ry='0' width='210' height='30' fill="white"/>
                
                {/* <path id="ServiceBot__EyelidGap--top" ref={lidTop}
                    d={`M20,30.05c2,0,6-4,15-4s13,4,15,4H20z`} 
                />
                <path id="ServiceBot__EyelidGap--bottom" 
                    d={`M50,30c-2,0-6,4-15,4S22,30,20,30`}
                />  */}

            </mask>

                {props.children}

            <circle id="ServiceBot__Eyelid--Skin" className="skin" 
                cx="35" cy="30" r="15" strokeWidth='1'
                mask="url(#ServiceBot__Eyelid)"
            />

        </ StyledEye>
    )
}

export default Eyelid;