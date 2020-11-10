import './TeamForm.scss';
// import AxiosInstance from '../../providers/services/Api';
import { SectionContainer, SectionContent, SectionHeader } from '../../shared/styles/SharedStyled';
import { TeamFormContainer, TeamFormTitle, ChipInputStyled } from './TeamFormStyled';
import { useState } from 'react';
import _ from 'underscore';
import { Chip } from '@material-ui/core';
import { MdAdd, MdClose } from 'react-icons/md';

const positions = [
    {
        firstRow: 3,
        seconnRow: 4,
        thirdRow: 3,
        id: '3-4-3'
    }
]

function TeamForm() {
    const [tags, setTags] = useState([]);
    const [pos, setPos] = useState(null);
    const [tes, setTes] = useState(0);

    function addTeamTags(tag) {
        setTags([...tags, tag]);
    }

    function deleteTeamTag(tag) {
        setTags(_.without(tags, tag));
    }

    // _.times(3, function (n) { console.log(n) })

    function onSelectFormation() {
        setPos(positions[tes]);
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
                                        chipRenderer={({
                                            value,
                                            handleClick,
                                            handleDelete
                                        }, key) => (
                                                <Chip
                                                    key={key}
                                                    style={{
                                                        color: '#fff',
                                                        backgroundColor: '#c50341',
                                                        margin: '0 8px 8px 0'
                                                    }}
                                                    onClick={handleClick}
                                                    onDelete={handleDelete}
                                                    label={value}
                                                    color="primary"
                                                    deleteIcon={<MdClose />}
                                                />
                                            )
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="team-info">
                        <TeamFormTitle>Configure Squard</TeamFormTitle>

                        <div className="fields-row">
                            <div className="col">
                                <div className="input-container">
                                    <label>Formation</label>

                                </div>

                                <div className="soccer-field">
                                    <div className="row soccer-field-row">
                                        {pos && _.times(pos.firstRow, (i) => {
                                            return <div key={i} className="position-item">
                                                <MdAdd style={{ color: '#fff' }} />
                                            </div>
                                        })}
                                    </div>

                                    <div className="row soccer-field-row">
                                        {pos && _.times(pos.seconnRow, (i) => {
                                            return <div key={i} className="position-item">
                                                <MdAdd style={{ color: '#fff' }} />
                                            </div>
                                        })}
                                    </div>

                                    <div className="row soccer-field-row">
                                        {pos && _.times(pos.thirdRow, (i) => {
                                            return <div key={i} className="position-item">
                                                <MdAdd style={{ color: '#fff' }} />
                                            </div>
                                        })}
                                    </div>

                                    <div className="row soccer-field-row">
                                        {pos && <div className="position-item">{pos.view}</div>}

                                    </div>
                                </div>

                                <div className="input-container">
                                    <button onClick={onSelectFormation}>Save</button>
                                </div>
                            </div>

                            <div className="col">
                                <div className="input-container">
                                    <label htmlFor="teamSearchPlayer">Search player</label>
                                    <input name="teamSearchPlayer" id="teamSearchPlayer" placeholder="Ronal" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionContent>
            </SectionContainer>
        </TeamFormContainer >
    );
}

export default TeamForm;
