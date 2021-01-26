import React from 'react'
import Para from '../../../widgets/typography/para';
import './map.css'

const MyMap = () => {
    return (
        <div className="map">
            <div>
               <Para>Reach out to us directly</Para>
               
                </div>
                
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.669600010676!2d85.36735484257717!3d27.789152878484884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1dcb412e3a5b%3A0x8946cc4e03a0c511!2sHIS%20Nepal!5e0!3m2!1sen!2snp!4v1611672027431!5m2!1sen!2snp"
                    width="500" height="337" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
       
    )
}
export default MyMap;