import React from 'react';
import './event.css';
import Image from '../../../images/image.png'
const Events =(props)=>{
    return(
        <div className="nban">
            <img src={Image} width="200px" height="200px"></img>
             <h3 >{props.children}</h3><br></br>
                <p><i>Monday, 10:00 Am - Friday, 10:00 Am</i></p>
                <p><i>St. Paul Church</i></p>
                <p><i>510 102th Ave, NE, Brllrvur, WA 68005</i></p>
                <div>
                    <br></br>
                    <p>
                        {props.description}
                    </p>
                </div>

        </div>

    ) 
}

export default Events;
    