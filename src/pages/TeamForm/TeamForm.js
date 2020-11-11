import './TeamForm.scss';
import AxiosInstance from '../../providers/services/Api';
import { SectionContainer, SectionContent, SectionHeader } from '../../shared/styles/SharedStyled';
import { TeamFormContainer, TeamFormTitle, ChipInputStyled } from './TeamFormStyled';
import { useState } from 'react';
import _ from 'underscore';
import { Chip } from '@material-ui/core';
import { MdAdd, MdClose } from 'react-icons/md';
import { connect } from 'react-redux';
import { FormHandler } from '../../redux/Actions';

const formations = [
    {
        firstRow: 3,
        seconnRow: 4,
        thirdRow: 3,
        fourthRow: 0,
        id: '3-4-3'
    },
    {
        firstRow: 3,
        seconnRow: 2,
        thirdRow: 2,
        fourthRow: 3,
        id: '3-2-2-3'
    },
    {
        firstRow: 3,
        seconnRow: 2,
        thirdRow: 3,
        fourthRow: 1,
        id: '3-2-3-1'
    },
    {
        firstRow: 3,
        seconnRow: 5,
        thirdRow: 2,
        fourthRow: 0,
        id: '3-5-2'
    },
    {
        firstRow: 4,
        seconnRow: 2,
        thirdRow: 3,
        fourthRow: 1,
        id: '4-2-3-1'
    },
    {
        firstRow: 4,
        seconnRow: 3,
        thirdRow: 1,
        fourthRow: 1,
        id: '4-3-1-1'
    },
    {
        firstRow: 4,
        seconnRow: 3,
        thirdRow: 2,
        fourthRow: 0,
        id: '4-3-2'
    },
    {
        firstRow: 4,
        seconnRow: 4,
        thirdRow: 2,
        fourthRow: 0,
        id: '4-4-2'
    },
    {
        firstRow: 4,
        seconnRow: 5,
        thirdRow: 1,
        fourthRow: 0,
        id: '4-5-1'
    },
    {
        firstRow: 5,
        seconnRow: 4,
        thirdRow: 1,
        fourthRow: 0,
        id: '5-4-1'
    }
]

function TeamForm(props) {
    const [tags, setTags] = useState([]);
    const [players, setPlayers] = useState([]);
    const [playerSearch, setPlayerSearch] = useState('');
    const [formation, setFormation] = useState(formations[0]);

    const [teamName, setTeamName] = useState('');
    const [teamDesc, setTeamDesc] = useState('');
    const [teamWebSite, setTeamWebSite] = useState('');
    const [teamType, setTeamType] = useState('');

    function addTeamTags(tag) {
        setTags([...tags, tag]);
    }

    function deleteTeamTag(tag) {
        setTags(_.without(tags, tag));
    }

    function onPressEnter(event) {
        if (event.key === 'Enter') {
            AxiosInstance.get(`/players/search/${playerSearch}`).then((response) => {
                let data = [];

                response.data.api.players.forEach(({ player_id, player_name, age, nationality }) => {
                    let info = {};
                    data.push(Object.assign(info, { player_id, player_name, age, nationality }));
                });

                setPlayers(data);
            });
        }
    }

    function onSelectFormation(event) {
        const form = formations.find(f => f.id === event.target.value);
        setFormation(form);
    }

    function save() {
        const { pushForm } = props;

        let teamData = {};

        Object.assign(teamData, {teamName, teamDesc, teamWebSite, teamType, tags});

        pushForm(teamData);

        props.history.push('/');
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
                                    <input name="teamName" id="teamName" placeholder="Insert team name"
                                        onChange={event => setTeamName(event.target.value)} value={teamName} />
                                </div>

                                <div className="input-container">
                                    <label htmlFor="teamDesc">Description</label>
                                    <textarea id="teamDesc" name="teamDesc" rows="9"
                                        onChange={event => setTeamDesc(event.target.value)} value={teamDesc}></textarea>
                                </div>
                            </div>

                            <div className="col">
                                <div className="input-container">
                                    <label htmlFor="teamWebsite">Team website</label>
                                    <input name="teamWebsite" id="teamWebsite" placeholder="http://myteam.com"
                                        onChange={event => setTeamWebSite(event.target.value)} value={teamWebSite} />
                                </div>

                                <div className="input-container">
                                    <label>Team type</label>
                                    <div>
                                        <div className="radio-item">
                                            <input type="radio" id="typeRal" name="teamType" value={teamType}
                                                onChange={() => setTeamType("real")} />
                                            <label htmlFor="typeRal">Real</label>
                                        </div>
                                        <div className="radio-item">
                                            <input type="radio" id="typeFantasy" name="teamType" value={teamType}
                                                onChange={() => setTeamType("fantasy")} />
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
                                    <label>
                                        Formation
                                        <select value={formation.id} onChange={onSelectFormation}>
                                            {formations.map((op, index) => (<option key={index} value={op.id}>{op.id}</option>))}
                                        </select>
                                    </label>

                                </div>

                                <div className="soccer-field">
                                    <div className="row soccer-field-row">
                                        {formation && _.times(formation.firstRow, (i) => {
                                            return <div key={i} className="position-item">
                                                <MdAdd style={{ color: '#fff' }} />
                                            </div>
                                        })}
                                    </div>

                                    <div className="row soccer-field-row">
                                        {formation && _.times(formation.seconnRow, (i) => {
                                            return <div key={i} className="position-item">
                                                <MdAdd style={{ color: '#fff' }} />
                                            </div>
                                        })}
                                    </div>

                                    <div className="row soccer-field-row">
                                        {formation && _.times(formation.thirdRow, (i) => {
                                            return <div key={i} className="position-item">
                                                <MdAdd style={{ color: '#fff' }} />
                                            </div>
                                        })}
                                    </div>

                                    {formation.fourthRow > 0 &&
                                        <div className="row soccer-field-row">
                                            {formation && _.times(formation.fourthRow, (i) => {
                                                return <div key={i} className="position-item">
                                                    <MdAdd style={{ color: '#fff' }} />
                                                </div>
                                            })}
                                        </div>
                                    }


                                    <div className="row soccer-field-row">
                                        {formation && <div className="position-item">{formation.view}</div>}

                                    </div>
                                </div>

                                <div className="input-container">
                                    <button onClick={save}>Save</button>
                                </div>
                            </div>

                            <div className="col">
                                <div className="input-container">
                                    <label htmlFor="teamSearchPlayer">Search player</label>
                                    <input name="teamSearchPlayer" id="teamSearchPlayer" placeholder="Ronal" onChange={event => setPlayerSearch(event.target.value)} onKeyDown={onPressEnter} value={playerSearch} />
                                </div>

                                <div className="results">
                                    {players.length > 0 && players.map(player => {
                                        return (
                                            <div className="result-card" key={player.id}>
                                                <div>
                                                    <div>
                                                        <label>Name: </label>
                                                        <span>{player.player_name}</span>
                                                    </div>

                                                    <div>
                                                        <label>Nacionality: </label>
                                                        <span>{player.nationality || '--//--'}</span>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label>Age: </label>
                                                    <span>{player.age}</span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionContent>
            </SectionContainer>
        </TeamFormContainer>
    );
}

const mapDispatchToProps = (dispatch) => ({
    pushForm: data => dispatch(FormHandler.pushForm(data))
});

export default connect(null, mapDispatchToProps)(TeamForm);
