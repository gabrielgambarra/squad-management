import styled from 'styled-components';

export const MainScreenContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1em;

    @media(max-width: 945px) {
        flex-direction: column;
        align-items: center;
    }
`;
