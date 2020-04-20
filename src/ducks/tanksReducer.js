const initialState = {
    myTanks: []
}

const SAVE_TANK = 'SAVE_TANK'

export const saveTank = (savedTank) => {
    console.log('hit saveTank', savedTank)
    return {
        type: SAVE_TANK,
        payload: savedTank
    }
}

export default function tankReducer(state = initialState, action){
    switch(action.type){
        case SAVE_TANK:
            console.log('hit')
            return {myTanks: [...state.myTanks, action.payload]}
        default:
            return state
    }
}