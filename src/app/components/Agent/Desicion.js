import React from 'react'

export default function Desicion({next ,reset}) {


    console.log(next)
    return (
        <div>


        <p>Proceeed</p>

       

        <button className="btn btn-success" onClick={reset}>Back To New Patient</button>
        <button className="btn btn-success" onClick={next}> Proceed to Test</button>
  
            
        </div>
    )
}
