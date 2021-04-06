const intialState = {
    soalPilgan : [],
    soalPendek : [],
    soalText : [],
}

export const soalReducers = (state = intialState, action) => {
    switch(action.type) {
        case "SOAL_PILGAN":
            return {
                ...state, soalPilgan:action.payload,
            }
        case "SOAL_PENDEK":
            return {
                ...state, soalPendek:action.payload,
            }
        case "SOAL_TEXT":
            return {
                ...state, soalText:action.payload,
            }     
        default:
            return state
    }
}