import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NewTeamButton = styled(Link)`
    display: flex;
    padding: .2em;
    background-image: linear-gradient(#a8397b, #823381);
    border-radius: 10px;
    color: #fff;
    box-shadow: 0px 25px 55px -10px rgba(130,51,129,1);
`;
