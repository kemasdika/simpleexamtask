const intialState = {
    username : '',
    jawabanPilgan : [],
    jawabanPendek : [],
    jawabanText : [],
}

export const jawabanReducers = (state = intialState, action) => {
    switch(action.type) {
        case "USERNAME":
            return {
                ...state, username:action.payload,
            }
        case "JAWABAN_PILGAN":
            return {
                ...state, jawabanPilgan:action.payload,
            }
        case "JAWABAN_PENDEK":
            return {
                ...state, jawabanPendek:action.payload,
            }
        case "JAWABAN_TEXT":
            return {
                ...state, jawabanText:action.payload,
            }
        case "RESET_SOAL":
            return {
                ...state, jawabanText:action.payload,
                ...state, jawabanPilgan:action.payload,
                ...state, jawabanPendek:action.payload,
            }
        case "RESET_NAME":
            return {
                ...state, username:action.payload,                
            }            
        default:
            return state
    }
}