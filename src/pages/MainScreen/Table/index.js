import React from 'react';
import './Table.scss';
import { MdDelete, MdShare, MdModeEdit, MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';

class Table extends React.Component {
    state = {
        data: [],
        sort: {
            column: null,
            direction: 'default',
        }
    };

    componentDidMount() {
        // Stub data
        const data = [];

        for (let i = 1; i < 11; i++) {
            const teamName = `Account ${i}`;
            const teamDescription = Math.floor(Math.random() * 1000000) + 10000;

            data.push({
                teamName,
                teamDescription,
            });
        }

        this.setState({ data });
    }

    onSort = (column) => (e) => {
        const direction = this.state.sort.column ? (this.state.sort.direction === 'asc' ? 'desc' : 'asc') : 'desc';
        const sortedData = this.state.data.sort((a, b) => {
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
                return a.teamDescription - b.teamDescription;
            }
        });

        if (direction === 'desc') {
            sortedData.reverse();
        }

        this.setState({
            data: sortedData,
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
                    {this.state.data.map((item, index) => {
                        return (
                            <tr>
                                <td>{item.teamName}</td>
                                <td>
                                    <div>
                                        <span>
                                            {item.teamDescription}
                                        </span>
                                        <div>
                                            <small><MdDelete /></small>
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

export default Table;
