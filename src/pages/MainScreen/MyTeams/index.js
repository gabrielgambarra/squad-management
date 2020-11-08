import { NewTeamButton } from './MyTeamsStyled';
import { SectionContainer, SectionHeader, SectionContent } from '../../../shared/styles/SharedStyled';
import { MdAdd } from 'react-icons/md';
import Table from '../Table';

function MyTeams() {
    return (
        <SectionContainer>
            <SectionHeader>
                <h2>My teams</h2>

                <NewTeamButton to="/form">
                    <MdAdd size={25} />
                </NewTeamButton>
            </SectionHeader>

            <SectionContent scroll>
                <Table />
            </SectionContent>
        </SectionContainer>
    );
}

export default MyTeams;
