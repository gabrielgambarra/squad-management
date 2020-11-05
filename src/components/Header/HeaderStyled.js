import styled from 'styled-components';
import QoP from '../../providers/images/QueenofPainArcana.png';

export const HeaderContainer = styled.div`
    max-width: 100%;
    background-image: repeating-linear-gradient(to right, #c00f4f, #8b1f6e);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5em 2em;

    @media(max-width: 600px) {
        padding: .5em 1em;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        margin: 0;
        margin-left: 15px;
        font-size: 20px;
        color: white;
        font-weight: 500;
    }

    @media(max-width: 600px) {

        p {
            font-size: 15px;
        }
    }
`;

export const Logo = styled.div`
    background-image: url(${QoP});
    background-position: center;
    background-size: cover;
    border-radius: 50%;
    width: 50px;
    height: 50px;

    @media(max-width: 600px) {
        width: 40px;
        height: 40px;
    }
`;

export const UserPhoto = styled(Logo)`
    width: 50px;
    background-image: url(${QoP});
    width: 45px;
    height: 45px;

    @media(max-width: 600px) {
        width: 35px;
        height: 35px;
    }
`;

export const UserContainer = styled(LogoContainer)`

    p {
        margin: 0;
        margin-right: 15px;
        font-size: 15px;
        font-weight: 400;
        visibility: visible;
    }

    @media(max-width: 600px) {

        p {
            display: none;
        }
    }
`;
