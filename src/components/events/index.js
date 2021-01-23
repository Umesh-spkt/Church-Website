import React from 'react';
import Title from '../../widgets/typography/title';
import Events from './components/event';
import './Events.css';


const Events_Container = (props) => {
    return (

        <div className="container">
            <Title color="#222">Our Events</Title>
            <div className="cards">
                <Events image="./images/image.jpg" description="The purpose of lorem ipsum is to create a natural 
        looking block of text (sentence, paragraph, page, etc.) that doesn't 
        distract from the layout. A practice not without controversy, laying 
        out pages with meaningless filler text can be very useful when the 
        focus is meant to be on design, not content.The passage experienced a 
        surge in popularity during the 1960s when Letraset 
        used it on their dry-transfer sheets, and again during the 90s as desktop
        publishers bundled the text with their software. ">Morning Gathering</Events>

                <Events description="The purpose of lorem ipsum is to create a natural 
        looking block of text (sentence, paragraph, page, etc.) that doesn't 
        distract from the layout. A practice not without controversy, laying 
        out pages with meaningless filler text can be very useful when the 
        focus is meant to be on design, not content.The passage experienced a 
        surge in popularity during the 1960s when Letraset 
        used it on their dry-transfer sheets, and again during the 90s as desktop
        publishers bundled the text with their software.">Spirit And Truth</Events>

                <Events description="The purpose of lorem ipsum is to create a natural 
        looking block of text (sentence, paragraph, page, etc.) that doesn't 
        distract from the layout. A practice not without controversy, laying 
        out pages with meaningless filler text can be very useful when the 
        focus is meant to be on design, not content.The passage experienced a 
        surge in popularity during the 1960s when Letraset 
        used it on their dry-transfer sheets, and again during the 90s as desktop
        publishers bundled the text with their software.">Sunday School</Events>
       
            </div>

            
        </div>
    )
}
export default Events_Container;