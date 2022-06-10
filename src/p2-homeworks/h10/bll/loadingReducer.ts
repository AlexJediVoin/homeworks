const initState: boolean = false;

type loadingACType = {
    type: "LOADING",
    payload: {
        isLoading: boolean,
    },
}

export const loadingReducer = (state = initState, action: loadingACType): boolean => {
    switch (action.type) {
        case "LOADING":
            return state = action.payload.isLoading;
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): loadingACType => {
    return ({
        type: "LOADING",
        payload: {isLoading}
    })
}