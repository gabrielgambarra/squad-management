import ChipInput from 'material-ui-chip-input';
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

export const ChipInputStyled = styled(ChipInput)`
    padding: .5em !important;
    border-radius: 5px;
    border: 1px solid #dadada !important;

    &:focus-within {
        border: 1px solid #c74041 !important;
    }
`;
