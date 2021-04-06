export const profile = (data) => {
    return async (dispatch) => {
        try {
            console.log(data,'dari action')
            dispatch({
                type:'PROFILE',
                payload:data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const jawabanPilgan = (data) => {
    return async (dispatch) => {
        try {
            // console.log(data,'dari action')
            dispatch({
                type:'JAWABAN_PILGAN',
                payload:data
            })
        } catch (err) {
            console.log(err)
        }
    }
}
export const jawabanPendek = (data) => {
    return async (dispatch) => {
        try {
            // console.log(data)
            dispatch({
                type:'JAWABAN_PENDEK',
                payload:data
            })
        } catch (err) {
            console.log(err)
        }
    }
}
export const jawabanText = (data) => {
    return async (dispatch) => {
        try {
            // console.log(data)
            dispatch({
                type:'JAWABAN_TEXT',
                payload:data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const resetSoal = (data) => {
    return async (dispatch) => {
        try {
            // console.log(data)
            dispatch({
                type:'RESET_SOAL',
                payload:data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const resetName = (data) => {
    return async (dispatch) => {
        try {
            // console.log(data)
            dispatch({
                type:'RESET_NAME',
                payload:data
            })
        } catch (err) {
            console.log(err)
        }
    }
}