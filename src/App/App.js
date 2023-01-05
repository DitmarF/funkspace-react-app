import { ThemeProvider } from "styled-components";
import Entrance from "../Features/Entrance/Entrance";
import GlobalStyles from "../Components/Styles/Global";
import { useSelector } from "react-redux";
import Header from "../Components/Module/Header";
import ThemeSwitcher from "../Features/ThemeSwitcher/ThemeSwitcher";

function App(props) {

    const themeId = useSelector(state => state.app.themeId);
    const isEntranceActive = useSelector(state => state.entrance.isActive);
    const ServiceBotExpression = useSelector(state => state.serviceBot.expression);

    let activeTheme = Object.values(props.data.themes)[0];

    if(themeId.payload) {
        activeTheme = Object.values(props.data.themes)[themeId.payload];
    }

    return (
        <ThemeProvider theme={activeTheme}>
            <GlobalStyles />
            <Header h='6' className="appInfo">
                {`Theme - ${activeTheme.name}`}
                {<br />}
                {`ThemeID - ${activeTheme.id}`}
                {<br />}
                {`Is Entrance active? - ${isEntranceActive}`}
                {<br />}
                {`ServiceBot expression - ${ServiceBotExpression}`}
            </Header>
            <ThemeSwitcher data={{theme:activeTheme}}/>
            <Entrance />
         </ThemeProvider>
    );
}

export default App;
