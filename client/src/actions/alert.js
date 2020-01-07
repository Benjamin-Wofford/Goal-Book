import { SET_ALERT } from './types'
import uuid from 'uuid'

export const setAlert = (msg, alertType, open) => dispatch => {

    const id = uuid.v4()
    dispatch({
        type: SET_ALERT, 
        payload: { msg, alertType, id, open}
    })

}