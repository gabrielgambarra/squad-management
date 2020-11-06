import styled from 'styled-components';

export const SectionContainer = styled.div`
    width: 100%;
    border-radius: 15px;
    background-color: #fff;
    padding: .5em 0;
    margin: 1em;
    box-shadow: 0px 0px 20px -15px rgba(0,0,0,0.45);
`;

export const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #eeeeee;
    padding: 1em;

    h2 {
        margin: 0;
        color: #552c8a;
    }
`;

export const SectionContent = styled.div`
    overflow: auto;
    padding: 1em;
    max-height: 70vh;
`;
