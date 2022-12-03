import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { toggleOn } from "../Entrance/entranceSlice";
import Body from "./Parts/Body";
import Head from "./Parts/Head";
import { setExpression } from "./serviceBotSlice";

const StyledServiceBot = styled.div`

    /* border: .2rem ${({theme}) => theme.colors.bright} dotted; */
    max-width: 7.5rem;
    margin: auto;
    margin-top: 1.5rem;

    @media (min-height: 400px) {
        max-width: 15rem;
        margin-top: 3rem;
    }

    @media (min-width: 768px) {
        max-width: 20rem;
        margin-top: 6rem;
    }

`;

function ServiceBot(props){

    const dispatch = useDispatch(); 

    const isActive = useSelector(state => state.entrance.isActive);
    const expression = useSelector(state => state.serviceBot.expression);

    useLayoutEffect(() => {
        if(isActive && expression === 'off') { dispatch(setExpression('default')) };
        if(!isActive && expression !== 'off') { dispatch(setExpression('off')) };
    })

    return(
        <StyledServiceBot onClick={props.onClick}>

            <svg id='ServiceBot' viewBox='0 0 70 130' onClick={() => dispatch( toggleOn() )}>

                <Head />

                <Body />

            </svg>

        </StyledServiceBot>
    )

}

export default ServiceBot;