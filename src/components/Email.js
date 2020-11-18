import React, {useState}from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom'
import { ErrorMessage } from '@hookform/error-message';
import { axiosWithAuth } from '../utils/axiosWithAuth'
import {Button, FormGroup, Input, Form} from 'reactstrap'
import emailjs from 'emailjs-com';

import { API_KEY } from '../utils/reduxVariables'




const EmailForm = () => {
    const userId = 'user_80CtuhuL9K2DLvDN8Cp7x'
    const [email, setEmail] = useState({ 
        organizer: '',
        email: '', 
        spread_event: ''
    })
    const { register, handleSubmit, errors, reset, watch } = useForm({ 
        mode: "onBlur",
  
      });
    const history = useHistory()
    const id = localStorage.getItem('user')
    const onSubmit = (data) => {
        
        emailjs.send("service_t9ou68h","template_8w63fep", data, userId)
        .then((message) => { 
            console.log(message)
        })
        .catch((error) => { 
            console.log("There was an error with your invite", error)
        })

     }

     

    return ( 
    <div>
        <Form onSubmit={handleSubmit(onSubmit)} className='shadow add-event-container'>
                
                <Input type="text" 
                placeholder="Title" 
                name="name" 
                invalid={errors.Name ? true : false}
                innerRef={register({required: "You must enter a Title", maxLength: 80})    } 
                />
                <ErrorMessage errors={errors} name="name" />
                
                <Input type="text" 
                placeholder="Email" 
                name="email" 
                invalid={errors.Name ? true : false}
                innerRef={register({required: "You must enter a Title", maxLength: 80})    } 
                />
                <ErrorMessage errors={errors} name="email" />

                <FormGroup>
                <Button color ='primary' type="submit" style={{width:'30%', margin: '20px 10px 20px 10px', }}>Submit</Button>
                <Button onClick={() => reset()} color='danger' style={{width:'30%', margin: '20px 10px 20px 10px', }}>Clear</Button>
                
                
                </FormGroup>
            </Form>



    </div> );
}
 
export default EmailForm;