import styled from "styled-components";

const StyledEntrance = styled.main`
    width: 100vw;
    height: 100vh;

    header {
        text-align: center;
        margin-top: 1rem;
        color: ${({theme}) => theme.colors.dark};
    }
`;

export default StyledEntrance;