import _ from 'underscore';
const initialState = {data: []};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'PUSH_FORM': return {...state, data: [...state.data, action.data]}

        case 'DELETE_TEAM': return {...state, data: _.without(state.data, action.teamIndex)}

        default: return state;
    }
}
