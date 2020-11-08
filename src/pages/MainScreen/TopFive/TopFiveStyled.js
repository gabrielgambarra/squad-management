import styled from 'styled-components';

export const TopFiveContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 560px) {
        flex-direction: column;
    }
`;

export const TopFiveSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: .5em;
`;

export const TopFiveTitle = styled.p`
    margin: .5em 0;
    font-weight: 500;
`;

export const TopFiveListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
    background-color: #e9e3e8;
    padding: .1em .3em;
`;

export const TopFiveListItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    width: 100%;
    background-color: #fff;
    margin: .3em .5em;
    border: 1px solid transparent;

    &:hover {
        border: 1px solid #cf2d61;
    }

    p {
        margin: .5em 1em;

        &:last-child {
            font-weight: bold;
        }
    }
`;
