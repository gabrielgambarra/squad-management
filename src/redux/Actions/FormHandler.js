export const pushForm = (data) => ({
    type: 'PUSH_FORM',
    data
});

export const deleteTeam = (teamIndex) => ({
    type: 'DELETE_TEAM',
    teamIndex
});
