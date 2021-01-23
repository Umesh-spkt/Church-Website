import React from 'react';
import './time.css'

const Time = (props)=>
{
    return(
        <div className="t">
            <p ><p style={{fontSize:40}}>{props.number}</p>{props.days}</p>

        </div>
    )
}
export default Time;
