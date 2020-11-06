import './MainScreen.scss';
import AxiosInstance from '../../providers/services/Api';
import { MainScreenContainer, NewTeamButton, MostPickedContainer, MostPickedSide, LessPickedSide, MiddleCamp, MostPickedInfo, InfoPicture, InfoTitle, InfoPercent, TopFiveContainer, TopFiveSide, TopFiveTitle, TopFiveListContainer, TopFiveListItem } from './MainScreenStyled';
import { SectionContainer, SectionHeader, SectionContent } from '../../shared/styles/SharedStyled';
import { MdAdd, MdDelete, MdShare, MdModeEdit } from 'react-icons/md';

function MainScreen() {

    return (
        <MainScreenContainer>

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

            <div className="right-column">
                <SectionContainer>
                    <SectionHeader>
                        <h2>Top 5</h2>
                    </SectionHeader>

                    <SectionContent>
                        <TopFiveContainer>
                            <TopFiveSide>
                                <TopFiveTitle>
                                    Highest avg age
                                </TopFiveTitle>
                                <TopFiveListContainer>
                                    <TopFiveListItem>
                                        <p>Inter Milan</p>
                                        <p>31.9</p>
                                    </TopFiveListItem>

                                    <TopFiveListItem>
                                        <p>Inter Milan</p>
                                        <p>31.9</p>
                                    </TopFiveListItem>

                                    <TopFiveListItem>
                                        <p>Inter Milan</p>
                                        <p>31.9</p>
                                    </TopFiveListItem>

                                    <TopFiveListItem>
                                        <p>Inter Milan</p>
                                        <p>31.9</p>
                                    </TopFiveListItem>

                                    <TopFiveListItem>
                                        <p>Inter Milan</p>
                                        <p>31.9</p>
                                    </TopFiveListItem>
                                </TopFiveListContainer>
                            </TopFiveSide>

                            <TopFiveSide>
                                <TopFiveTitle>
                                    Highest avg age
                                </TopFiveTitle>
                                <TopFiveListContainer>
                                    <TopFiveListItem>
                                        <p>Inter Milan</p>
                                        <p>31.9</p>
                                    </TopFiveListItem>

                                    <TopFiveListItem>
                                        <p>Inter Milan</p>
                                        <p>31.9</p>
                                    </TopFiveListItem>

                                    <TopFiveListItem>
                                        <p>Inter Milan</p>
                                        <p>31.9</p>
                                    </TopFiveListItem>

                                    <TopFiveListItem>
                                        <p>Inter Milan</p>
                                        <p>31.9</p>
                                    </TopFiveListItem>

                                    <TopFiveListItem>
                                        <p>Inter Milan</p>
                                        <p>31.9</p>
                                    </TopFiveListItem>
                                </TopFiveListContainer>
                            </TopFiveSide>
                        </TopFiveContainer>
                    </SectionContent>
                </SectionContainer>

                <MostPickedContainer>
                    <MostPickedSide>
                        <MostPickedInfo>
                            <InfoTitle>
                                Most picked player
                            </InfoTitle>
                            <div className="picked-players-row">
                                <InfoPicture>
                                    GG
                                </InfoPicture>
                                <InfoPercent>
                                    75%
                                </InfoPercent>
                            </div>
                        </MostPickedInfo>
                    </MostPickedSide>

                    <MiddleCamp />

                    <LessPickedSide>
                        <MostPickedInfo>
                            <InfoTitle>
                                Less picked player
                            </InfoTitle>
                            <div className="picked-players-row">
                                <InfoPicture>
                                    GG
                                </InfoPicture>
                                <InfoPercent>
                                    25%
                                </InfoPercent>
                            </div>
                        </MostPickedInfo>
                    </LessPickedSide>
                </MostPickedContainer>
            </div>

        </MainScreenContainer>
    );
}

export default MainScreen;
