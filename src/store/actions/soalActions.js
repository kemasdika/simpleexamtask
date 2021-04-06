export const soalPilganAction = (data) => {
    return async (dispatch) => {
        try {
            console.log(data,'dari action')
            dispatch({
                type:'SOAL_PILGAN',
                payload:data
            })
        } catch (err) {
            console.log(err)
        }
    }
}
export const soalPendekAction = (data) => {
    return async (dispatch) => {
        try {
            // console.log(data)
            dispatch({
                type:'SOAL_PENDEK',
                payload:data
            })
        } catch (err) {
            console.log(err)
        }
    }
}
export const soalTextAction = (data) => {
    return async (dispatch) => {
        try {
            // console.log(data)
            dispatch({
                type:'SOAL_TEXT',
                payload:data
            })
        } catch (err) {
            console.log(err)
        }
    }
}
