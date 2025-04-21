import React from "react";

function ChildComponent2({option}){

    return(
        <div>
            <button onClick={() => option('Option 2')}>Option2</button>
        </div>
    )
}

export default ChildComponent2