import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainScreenContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 1em;

    @media(max-width: 945px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const NewTeamButton = styled(Link)`
    display: flex;
    padding: .2em;
    background-image: linear-gradient(#a8397b, #823381);
    border-radius: 10px;
    color: #fff;
    box-shadow: 0px 25px 55px -10px rgba(130,51,129,1);
`;

export const MostPickedContainer = styled.div`
    width: 100%;
    border-radius: 15px;
    background-image: linear-gradient(#c00f4f, #8b1f6e);
    margin: 1em;
    box-shadow: 0px 0px 20px -15px rgba(0,0,0,0.45);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media(max-width: 560px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const MostPickedSide = styled.div`
    width: 100%;
    background-color: transparent;
    border-right: 1px solid #fff;
    float: left;
    padding: 2em;

    @media(max-width: 560px) {
        border: 0;
        border-bottom: 1px solid #fff;
        padding: 1.5em 0;
    }
`;

export const MiddleCamp = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid #fff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
`;

export const LessPickedSide = styled.div`
    width: 100%;
    background-color: transparent;
    float: right;
    padding: 2em;

    @media(max-width: 560px) {
        border: 0;
        padding: 1.5em 0;
    }
`;

export const MostPickedInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;

export const InfoTitle = styled.h2`
    font-size: 18px;
    margin-bottom: 0;
    margin-left: 0.83em;
    color: #fefdfe;

    @media(max-width: 560px) {
        font-size: 21px;
    }
`;

export const InfoPercent = styled.p`
    margin: 0;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-left: 0.83em;
    font-size: 25px;
    text-decoration: underline;
    color: #fefdfe;
`;

export const InfoPicture = styled.h2`
    border-radius: 50%;
    padding: 1.5em;
    background-color: #fff;

    @media(max-width: 560px) {
        border: 0;
        border-bottom: 1px solid #fff;
        padding: 2em;
    }
`;

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
    background-color: #e9e3e8;
    width: 100%;
    margin: .5em;
    border-radius: 15px;
    padding: .5em;
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
