import React from 'react';
import './banner.css';
import Button from '../../widgets/button'
import Title from '../../widgets/typography/title';
import Outline_Button from '../../widgets/outline_button';
import Time from './components/time';


const Banner = (props) => {
    return (
        <div>
            <div className="banners">
                <div className="banner" >
                    <p><i>Monday, 10:00 Am - Friday, 10:00 Am</i></p>
                    <h3 className='banner_title'>Welcome to our Church</h3>
                </div>
                <div className="banner">
                    <p><i>St. Paul Church</i></p>
                    <p><i>510 102th Ave, NE, Brllrvur, WA 68005</i></p>
                </div>

                <Outline_Button className="banner" title="Read More" />

            </div>

            <div className="bbody">
                <div className="ban">
                <h3 >Welcome to our Church</h3><br></br>
                <p><i>Monday, 10:00 Am - Friday, 10:00 Am</i></p>
                <p><i>St. Paul Church</i></p>
                <p><i>510 102th Ave, NE, Brllrvur, WA 68005</i></p>
                </div>
            <div className="ban1">
                <Time number="200" days="Days"/><p style={{fontSize:50, color:'grey'}}>|</p>
                <Time number="16" days="Hours"/><p style={{fontSize:50, color:'grey'}}>|</p>
                <Time number="42" days="Minutes"/><p style={{fontSize:50, color:'grey'}}>|</p>
                <Time number="40" days="Seconds"/>

                
                
            </div>
        </div>
    </div>

    );
}
export default Banner;