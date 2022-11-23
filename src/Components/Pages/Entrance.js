import ServiceBot from "../ServiceBot/ServiceBot";
import StyledEntrance from "../Styles/Entrance.styled";
import Header from "./Module/Header";

function Entrance() {
    return(

        <StyledEntrance>
            <Header h={1}>Funkspace</Header>
            <ServiceBot />
        </StyledEntrance>
        
    )
}

export default Entrance;