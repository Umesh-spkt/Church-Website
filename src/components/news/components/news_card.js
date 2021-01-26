import React from 'react'
import './news_card.css'
import Image from '../../../images/image.png'

const News_Card=(props)=>
{
    return(
        <div className="card">
            <img src={Image} width="200px" height="200px"></img>
             <h3 >{props.children}</h3><br></br>
                <div>
                    <br></br>
                    <p>
                        {props.description}
                    </p>
                </div>

        </div>
    )

}
export default News_Card;