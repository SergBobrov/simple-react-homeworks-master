const SET_LOADING = "SET_LOADING"

const initState = {
    loading: false
};

export type loadingReducerType = {
    loading: boolean
}

type ActionsType = ReturnType<typeof loadingAC>


export const loadingReducer = (state: loadingReducerType = initState, action: ActionsType): loadingReducerType => { // fix any
    switch (action.type) {
        case SET_LOADING: {
            return {loading: action.loading}
        }
        default:
            return state;
    }
};

export const loadingAC = (loading: boolean) => {
    return {type: SET_LOADING, loading}
};