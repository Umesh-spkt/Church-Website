import React from 'react'
import Form from './component/form'
import MyMap from './component/map'
import './container.css'


const FooterContainer=()=>
{
    return(
    <div id="container-form">
        <Form/>
        <MyMap/>
        
    </div>
    )
}

export default FooterContainer