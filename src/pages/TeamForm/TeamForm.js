import './TeamForm.scss';
import AxiosInstance from '../../providers/services/Api';
import { SectionContainer, SectionContent, SectionHeader } from '../../shared/styles/SharedStyled';
import { TeamFormContainer, TeamFormTitle, ChipInputStyled } from './TeamFormStyled';
import { useState } from 'react';
import _ from 'underscore';

function TeamForm() {

    const [tags, setTags] = useState([]);

    function addTeamTags(tag) {
        setTags([...tags, tag]);
    }

    function deleteTeamTag(tag) {
        setTags(_.without(tags, tag));
    }

    return (
        <TeamFormContainer>

            <SectionContainer>
                <SectionHeader>
                    <h2>Create your team</h2>
                </SectionHeader>

                <SectionContent>
                    <div className="team-info">
                        <TeamFormTitle>Team Information</TeamFormTitle>

                        <div className="fields-row">
                            <div className="col">
                                <div className="input-container">
                                    <label htmlFor="teamName">Team name</label>
                                    <input name="teamName" id="teamName" placeholder="Insert team name" />
                                </div>

                                <div className="input-container">
                                    <label htmlFor="teamDesc">Description</label>
                                    <textarea id="teamDesc" name="teamDesc" rows="9"></textarea>
                                </div>
                            </div>

                            <div className="col">
                                <div className="input-container">
                                    <label htmlFor="teamWebsite">Team website</label>
                                    <input name="teamWebsite" id="teamWebsite" placeholder="http://myteam.com" />
                                </div>

                                <div className="input-container">
                                    <label>Team type</label>
                                    <div>
                                        <div className="radio-item">
                                            <input type="radio" id="typeRal" name="teamType" value="fantasy" />
                                            <label htmlFor="typeRal">Real</label>
                                        </div>
                                        <div className="radio-item">
                                            <input type="radio" id="typeFantasy" name="teamType" value="real" />
                                            <label htmlFor="typeFantasy">Fantasy</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="input-container">
                                    <label htmlFor="teamTags">Tags</label>
                                    <ChipInputStyled
                                        id="teamTags"
                                        disableUnderline
                                        value={tags}
                                        onAdd={(chip) => addTeamTags(chip)}
                                        onDelete={(chip) => deleteTeamTag(chip)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="team-info">
                        <TeamFormTitle>Configure Squard</TeamFormTitle>


                    </div>
                </SectionContent>
            </SectionContainer>
        </TeamFormContainer>
    );
}

export default TeamForm;
