import {PeopleType, UserType} from "../HW8";

type ActionSortType = {
    type: "sort"
    payload: "up" | "down"
}
type ActionCheckType = {
    type: "check"
    payload: 18
}

export const homeWorkReducer = (state: PeopleType, action: ActionSortType | ActionCheckType): PeopleType => { // need to fix any
    let copyState = [...state];
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                copyState.sort((a, b) => a.name > b.name ? 1 : -1);
            }
            if (action.payload === 'down') {
                copyState.sort((a, b) => a.name < b.name ? 1 : -1);
            }
            return copyState
        }
        case 'check': {
           return copyState.filter(p => p.age > action.payload).sort((a, b) => a.age > b.age ? 1 : -1);
        }
        default:
            return state
    }
}