import { GET_GOALS, GOAL_ERROR } from '../actions/types'

const initialState = {
    goals: [], 
    goal: null, 
    loading: true, 
    error: {}
}

export default function(state = initialState, action) {
    const { type, payload } = action

    switch(type){
        case GET_GOALS: 
        return {
            ...state, 
            goals: payload,
            loading: false
        } 
        case GOAL_ERROR: 
        return {
            ...state, 
            error: payload, 
            loading: false
        }
        default: 
        return state 
    }
}