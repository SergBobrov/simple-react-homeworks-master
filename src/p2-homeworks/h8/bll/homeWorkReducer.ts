export const SORT_PEOPLE = 'sort'
export const SORT_PEOPLE_MORE_18 = 'SORT_PEOPLE_MORE_18'

export type PeopleStateType = Array<{
    _id: number
    name: string
    age: number
}>

type HomeWorkActionsType =
    ReturnType<typeof SortPeopleUpAC> | ReturnType<typeof SortPeople18MoreAC>

export const homeWorkReducer = (state: PeopleStateType, action: HomeWorkActionsType): PeopleStateType => {
    switch (action.type) {
        case SORT_PEOPLE: {
            let newState = [...state.sort((a, b) => {
                if (a.name < b.name) {
                    return -1
                }
                if (a.name < b.name) {
                    return 1
                } else return 0
            })
            ];
            if (action.payload === "up") {
                return newState
            } else return newState.reverse()
        }

        case SORT_PEOPLE_MORE_18: {
            return state.filter(a => a.age > 18)
        }
        default:
            return state
    }
};

export const SortPeopleUpAC = (payload: "up" | "down") => {
    return {type: SORT_PEOPLE, payload: payload} as const
};


export const SortPeople18MoreAC = () => {
    return {type: SORT_PEOPLE_MORE_18} as const
};