import React from 'react';
import Title from '../../widgets/typography/title';
import ServiceCard from './components/service_card';

import './services.css'


const Services = (props) =>{
    return  <div className='services_container'>
        <Title color="#222">Statement of Faith</Title>
        <br/><br/>
        <div className="services">
            <ServiceCard title="Who are you" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled" logo="LOGO"/>

<ServiceCard title="How are you" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled" logo="LOGO"/>

<ServiceCard title="Who are you" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled" logo="LOGO"/>
            
        </div>
      
    </div>
}

export default Services;