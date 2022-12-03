import ServiceBot from "../ServiceBot/ServiceBot";
import StyledEntrance from "./Entrance.styled";
import Header from "../../Components/Module/Header";

function Entrance() {
 
    return(
        
        <StyledEntrance>
            <Header h="1">Funk Space</Header>
            
            <ServiceBot />
        </StyledEntrance>
        
    )
}

export default Entrance;