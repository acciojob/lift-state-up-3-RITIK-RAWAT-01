import React from "react";


function ChildComponent1({option}){

    return(
        <div>
            <button onClick={() => option('Option 1')}>Option1</button>
        </div>
    )
}

export default ChildComponent1