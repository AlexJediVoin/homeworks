export type themeType = 'dark' | 'red' | 'some' | 'blue' | 'purple';
export type StateType = {
    currentColorThem: themeType
}
type changeColorThemACType = {
    type: 'CHANGE-COLOR'
    payload: {
        newThem: themeType
    }
}
type ActionType = changeColorThemACType;
const initState: StateType = {
    currentColorThem: 'dark'
};

export const themeReducer = (state = initState, action: ActionType): StateType => {
    switch (action.type) {
        case "CHANGE-COLOR":
            return {...state, currentColorThem: action.payload.newThem};
        default:
            return state;
    }
};

export const changeColorThemAC = (newThem: themeType): changeColorThemACType => {
    return ({
        type: 'CHANGE-COLOR',
        payload: {newThem}
    })
}

export const changeThemeC = (): any => {
}; // fix any