import { SectionContainer, SectionHeader, SectionContent } from '../../../shared/styles/SharedStyled';
import { TopFiveContainer, TopFiveSide, TopFiveTitle, TopFiveListContainer, TopFiveListItem } from './TopFiveStyled';

function TopFive() {
    return (
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
    );
}

export default TopFive;
