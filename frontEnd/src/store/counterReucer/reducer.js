import { DECREMENT, INCREMENT, RESET } from "./action-type";



const initialState = {
    value:0,
}

const reducer = (action, state=initialState)=>{
    const {type, payload} = action;
    switch(type){
        case INCREMENT: return {...state, value:state[value]+1};
        case DECREMENT: return {...state, value:state[value]-1};
        case RESET: return {value:0};
        default: return state;
    }
}


export default reducer;