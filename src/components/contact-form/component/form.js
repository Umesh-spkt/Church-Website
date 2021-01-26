import React from 'react'
import Button from '../../../widgets/button';
import Para from '../../../widgets/typography/para';
import Title from '../../../widgets/typography/title';
import './contact.css'

class Form extends React.Component {
    state = {
        name: '',
        email: '',
        phone: '',
        message: ''
    }
  

    // handleNameChange = (e)=>{
    //  this.setState({
    //      name: e.target.value
    //  })
    // }
    // handleEmailChange = (e)=>{
    //     this.setState({
    //         email: e.target.value
    //     })
    //    }
    //    handlePhoneChange = (e)=>{
    //     this.setState({
    //         phone: e.target.value
    //     })
    //    }
    //    handleMessageChange = (e)=>{
    //     this.setState({
    //         message: e.target.value
    //     })
    //    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,

        })
    }
    //TODO:: form validaton check for email, required,txtarea max 250 char,"remove white spaces" console.log(this.state);
    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }


    render() {

        //name,email,phone, message}= this.state;
        // const {name, age, address:{city, street}}= person ; //new way to retrieve elements from the object

        return (
           
                <form onSubmit={this.handleFormSubmit}>
                <Para>We'd love hearing from you</Para>
                    <input type='text' name="name" placeholder="Name" onChange={this.handleChange} />
                    <input type='text' name="email" placeholder="Email" onChange={this.handleChange} />
                    <input type='text' name="phone" placeholder="Phone" onChange={this.handleChange} />
                    <textarea name="message" placeholder="Message" onChange={this.handleChange}
                        style={{ height: 85, width: 250, padding: 10 }}></textarea>
                    <Button title="Submit" type="submit" />
                </form>
           
        )
    }
}
export default Form;