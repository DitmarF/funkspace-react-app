import { useDispatch, useSelector } from "react-redux";
import ServiceBot from "../ServiceBot/ServiceBot";
import StyledEntrance from "./Entrance.styled";
import Header from "../../Components/Module/Header";
import { toggleOn } from "./entranceSlice"


function Entrance() {

    const isOn = useSelector(state => state.entrance.isOn);
    const dispatch = useDispatch(); 
    console.log(isOn)

    return(
        
        <StyledEntrance>
            <Header h={1}>{`Funkspace ${isOn}`}</Header>
            <ServiceBot onClick={() => dispatch( toggleOn() )}/>
        </StyledEntrance>
        
    )
}

export default Entrance;