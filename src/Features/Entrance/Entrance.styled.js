import styled from "styled-components";

const StyledEntrance = styled.main`
    width: 100%;
    height: 100%;

    header {
        text-align: center;
        margin-top: 1rem;
        color: ${({theme}) => theme.colors.dark};
    }
`;

export default StyledEntrance;