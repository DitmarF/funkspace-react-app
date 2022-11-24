import { ThemeProvider } from "styled-components";
import Entrance from "./Components/Pages/Entrance";
import GlobalStyles from "./Components/Styles/Global";
import data from "./data/dataModel";


function App() {

  return (
    <ThemeProvider theme={data.themes.BlackAndWhite}>
        <GlobalStyles />
        <Entrance />
    </ThemeProvider>
  );
}

export default App;
