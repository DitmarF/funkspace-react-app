import { useDispatch, useSelector } from "react-redux";
import ServiceBot from "../ServiceBot/ServiceBot";
import StyledEntrance from "./Entrance.styled";
import Header from "../../Components/Module/Header";
import { toggleOn } from "./entranceSlice"


function Entrance() {

    const dispatch = useDispatch(); 
 
    return(
        
        <StyledEntrance>
            <Header h="1">Funk Space</Header>
            <ServiceBot onClick={() => dispatch( toggleOn() )}/>
        </StyledEntrance>
        
    )
}

export default Entrance;