import React, { useMemo, useState } from 'react'

export default function Usememo() {

    let [add,setAdd] = useState(0)
    let [minus,setMinus] = useState(100);

    // let Function = () =>{
    // }
    
    let Multiply = useMemo(function Multiply(){
        console.log("**************************")
        return add * 10;

    },[add])

    return (
    <>
        {Multiply}
        <br />
        <button onClick={() => setAdd(add + 1)}>add</button>
        <p>{add}</p>
        <button onClick={() => setMinus(minus - 1)}>minus</button>
        <p>{minus}</p>
    
    </>
  )
}
