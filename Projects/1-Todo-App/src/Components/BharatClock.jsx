import React from "react";

function BharatClock (){
    let date = new Date();
    return(
        <React.Fragment>
            <h2>Bharat Clock</h2>
            <p>This is the clock that shows the time in Bharat at all time</p>
            <h4>This is the current time : {date.toLocaleDateString()} - {date.toLocaleTimeString()}</h4>
        </React.Fragment>
    )
}

export default BharatClock;