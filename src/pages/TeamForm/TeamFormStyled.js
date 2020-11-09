import styled from 'styled-components';

export const TeamFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1em;
    align-items: center;

    @media(max-width: 945px) {
        align-items: center;
    }
`;

export const TeamFormTitle = styled.h4`
    text-transform: uppercase;
    color: #8d8d8d;
`;
