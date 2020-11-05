import styled from 'styled-components';

export const FooterContainer = styled.div`
    max-width: 100%;
    display: flex;
    background-color: #e9e3e9;
    justify-content: center;
    padding: .5em;

    @media(max-width: 600px) {
        padding: .5em 0;
    }
`;