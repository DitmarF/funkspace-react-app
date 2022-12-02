import { ThemeProvider } from "styled-components";
import Entrance from "../Features/Entrance/Entrance";
import GlobalStyles from "../Components/Styles/Global";
import { useSelector } from "react-redux";
import Header from "../Components/Module/Header";


function App(props) {

    const themeId = useSelector(state => state.app.themeId);
    const isEntranceActive = useSelector(state => state.entrance.isActive);

    let activeTheme;

    Object.values(props.data.themes).forEach(theme => {

        if(theme.id = themeId) activeTheme = theme;

    })

    return (
        <ThemeProvider theme={activeTheme}>
            <GlobalStyles />
            <Header h='6' className="appInfo">
                {`Theme - ${activeTheme.name}`}
                {<br />}
                {`ThemeID - ${activeTheme.id}`}
                {<br />}
                {`Is Entrance active? - ${isEntranceActive}`}
            </Header>
            <Entrance />
         </ThemeProvider>
    );
}

export default App;
