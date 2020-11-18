import React, {useState}from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom'
import { ErrorMessage } from '@hookform/error-message';
import { axiosWithAuth } from '../utils/axiosWithAuth'
import {Button, 
    FormGroup, 
    Input, 
    Form, 
    UncontrolledButtonDropdown, 
    DropdownMenu, 
    DropdownItem, 
    DropdownToggle
} 
from 'reactstrap'
import {
    EmailShareButton,
    FacebookShareButton, 
    EmailIcon, 
    FacebookIcon
} from 'react-share'

import emailjs from 'emailjs-com';

import { API_KEY } from '../utils/reduxVariables'




const EmailForm = () => {
    const [email, setEmail] = useState({ 
        organizer: '',
        email: '', 
        message: '',
        spread_event: ''
    })
    const { register, handleSubmit, errors, reset, watch } = useForm({ 
        mode: "onBlur",
  
      });
    const history = useHistory()
    const id = localStorage.getItem('user')
    const onSubmit = (data) => {
        
        emailjs.send("service_t9ou68h","template_8w63fep", data, API_KEY)
        .then((message) => { 
            console.log(message)
        })
        .catch((error) => { 
            console.log("There was an error with your invite", error)
        })

     }

     

    return ( 
    <div>
        <Form onSubmit={handleSubmit(onSubmit)} id='share-form'>
                <Input type="text" 
                placeholder="Email" 
                name="email" 
                invalid={errors.Name ? true : false}
                innerRef={register({required: "You must enter a Title", maxLength: 80})    } 
                />
                <ErrorMessage errors={errors} name="email" />
                <Input type="textarea" 
                placeholder="Message" 
                name="message" 
                invalid={errors.Name ? true : false}
                innerRef={register} 
                />

                <FormGroup>
                <Button color ='primary' type="submit" style={{width:'30%', margin: '20px 10px 20px 10px', }}>Submit</Button>
                <Button onClick={() => reset()} color='danger' style={{width:'30%', margin: '20px 10px 20px 10px', }}>Clear</Button>
                <UncontrolledButtonDropdown direction="right">
      <DropdownToggle caret>
        Share
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem >
            <div className='drop-down-group'>
            <EmailIcon size={32} round={true}/>
            <p>Share with E-mail</p>
            </div>
            </DropdownItem>
        <DropdownItem>
            <FacebookShareButton quote="You're invited" url='www.google.com'>
            <div className='drop-down-group'>
                <FacebookIcon size={32} round={true}/>
                <p>Share with Facebook</p>
            </div>
            </FacebookShareButton>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledButtonDropdown>
                
                
                </FormGroup>
            </Form>



    </div> );
}
 
export default EmailForm;