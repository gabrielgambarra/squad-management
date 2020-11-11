import React from 'react';
import './Table.scss';
import { MdDelete, MdShare, MdModeEdit, MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';
import { connect } from 'react-redux';
import { FormHandler } from '../../../redux/Actions';

class Table extends React.Component {
    state = {
        teamData: [],
        sort: {
            column: null,
            direction: 'default',
        }
    };

    componentDidMount() {
        const { data } = this.props;
        this.setState({ teamData: data });
    };

    componentDidUpdate = (prevProps) => {
        const { data } = this.props;
        if (prevProps.data !== data) {
            this.setState({ teamData: data });
        }
    };

    deleteTeam(index) {
        const { deleteTeam } = this.props;

        deleteTeam(index);
    }

    onSort = (column) => (e) => {
        const direction = this.state.sort.column ? (this.state.sort.direction === 'asc' ? 'desc' : 'asc') : 'desc';
        const sortedData = this.state.teamData.sort((a, b) => {
            if (column === 'teamName') {
                const nameA = a.teamName.toUpperCase();
                const nameB = b.teamName.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }

                return 0;
            } else {
                return a.teamDesc - b.teamDesc;
            }
        });

        if (direction === 'desc') {
            sortedData.reverse();
        }

        this.setState({
            teamData: sortedData,
            sort: {
                column,
                direction,
            }
        });
    };

    render() {

        const { direction } = this.state.sort;

        return (
            <table>
                <thead>
                    <tr>
                        <th>
                            <div>
                                <span>Name</span>
                                <button onClick={this.onSort('teamName')}>
                                    <MdArrowDropUp
                                        style={direction === 'asc' || direction === 'default' ? { visibility: "visible" } : { visibility: "hidden" }} />
                                    <MdArrowDropDown
                                        style={direction === 'desc' || direction === 'default' ? { visibility: "visible" } : { visibility: "hidden" }} />
                                </button>
                            </div>
                        </th>
                        <th>
                            <div>
                                <span>Description</span>
                                <button onClick={this.onSort('teamDescription')}>
                                    <MdArrowDropUp
                                        style={direction === 'asc' || direction === 'default' ? { visibility: "visible" } : { visibility: "hidden" }} />
                                    <MdArrowDropDown
                                        style={direction === 'desc' || direction === 'default' ? { visibility: "visible" } : { visibility: "hidden" }} />
                                </button>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.teamData.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.teamName}</td>
                                <td>
                                    <div>
                                        <span>
                                            {item.teamDesc}
                                        </span>
                                        <div>
                                            <small onClick={() => this.deleteTeam(item)}><MdDelete /></small>
                                            <small><MdShare /></small>
                                            <small><MdModeEdit /></small>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        )
    }

}

const mapStateToProps = (state) => ({
    data: state.data
});

const mapDispatchToProps = (dispatch) => ({
    deleteTeam: data => dispatch(FormHandler.deleteTeam(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
