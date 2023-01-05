import { useDispatch } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import { switchTheme } from "../../App/appSlice";

const Nav = styled.nav`

position: fixed;
right: 0;
bottom: 0;
display: flex;

    button {
        background-color: ${({ theme }) => theme.colors.semiDark};
        color: ${({ theme }) => theme.colors.semiBright};
        border: none;
        padding: 8px 16px;
        margin: 8px 16px;
        border-radius: 4px;
        font-size: 16px;
    }
`

function ThemeSwitcher(props) {

    // console.log(props)

    const activeTheme = props.data.theme;

    const dispatch = useDispatch();

    const handleThemeSwitch = id => {

        dispatch(switchTheme(id));
    }

    return (
        <ThemeProvider theme={activeTheme}>
            <Nav>
                <button onClick={() => handleThemeSwitch('0')}>Theme 1</button>
                <button onClick={() => handleThemeSwitch('1')}>Theme 2</button>
                <button onClick={() => handleThemeSwitch('2')}>Theme 3</button>
                <button onClick={() => handleThemeSwitch('3')}>Theme 4</button>
                <button onClick={() => handleThemeSwitch('4')}>Theme 5</button>
            </Nav>
        </ThemeProvider>
    );
}

export default ThemeSwitcher;