import { ThemeProvider } from "styled-components";
import Entrance from "../Features/Entrance/Entrance";
import GlobalStyles from "../Components/Styles/Global";
import data from "../data/dataModel";
import { useSelector } from "react-redux";
import Header from "../Components/Module/Header";


function App() {

    const themeId = useSelector(state => state.app.themeId);
    const isEntranceOn = useSelector(state => state.entrance.isOn)
    console.log(themeId);
    console.log(data);

    let activeTheme;

    Object.values(data.themes).forEach(theme => {

        if(theme.id = themeId) activeTheme = theme;

    })

    console.log(activeTheme);

    return (
        <ThemeProvider theme={activeTheme}>
            <GlobalStyles />
            <Header h='6' className="appInfo">
                {`Theme - ${activeTheme.name}`}
                {<br />}
                {`ThemeID - ${activeTheme.id}`}
                {<br />}
                {`Is Entrance on? - ${isEntranceOn}`}
            </Header>
            <Entrance />
         </ThemeProvider>
    );
}

export default App;
