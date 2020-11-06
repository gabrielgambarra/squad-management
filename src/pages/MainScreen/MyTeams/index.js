import { NewTeamButton } from './MyTeamsStyled';
import { SectionContainer, SectionHeader, SectionContent } from '../../../shared/styles/SharedStyled';
import { MdAdd, MdDelete, MdShare, MdModeEdit } from 'react-icons/md';

function MyTeams() {
    return (
        <SectionContainer>
            <SectionHeader>
                <h2>My teams</h2>

                <NewTeamButton to="/form">
                    <MdAdd size={25} />
                </NewTeamButton>
            </SectionHeader>

            <SectionContent>

            </SectionContent>
        </SectionContainer>
    );
}

export default MyTeams;
