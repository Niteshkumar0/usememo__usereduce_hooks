import React, { useReducer, useState } from 'react'

export default function Usereduce() {

    // let [count , setCount] = useState(0)
    let initialState = 0;

    let reducer = (state,action) =>{
        // action.type==="INCREMENT" ?  state +1 :  state;
        if (action.type === "INCREMENT") {
            return state +1;
        }
        else if(action.type == "DECREMENT"){
            return state - 1;
        }
        return state;

    }

    let [state,dispatch] = useReducer(reducer,initialState)


  return (
   <>
    {state}
    <br />
    <button onClick={() => dispatch({type: "INCREMENT"}) }>increment</button>
    <button  onClick={() => dispatch({type: "DECREMENT"})} >decrement</button>
   
    
   </>
  )
}
