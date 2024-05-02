import { DECREMENT, INCREMENT, RESET } from "./action-type";



export function increment(){
    dispatch({type:INCREMENT})
}
export function decrement(){
    dispatch({type:DECREMENT})
}
export function reset(){
    dispatch({type:RESET})
}