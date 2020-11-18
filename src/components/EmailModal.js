import React, { useState } from 'react';
import { Button, 
    Modal, 
    ModalHeader, 
    ModalBody,  
    Input, 
    Form, } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom'
import { ErrorMessage } from '@hookform/error-message';

import emailjs from 'emailjs-com';
import { API_KEY } from '../utils/reduxVariables'

import fries from '../assets/fries.jpg'

const EmailModal = (props) => {
  const {
    className
  } = props;
  const [modal, setModal] = useState(true);
  const [email, setEmail] = useState({ 
    organizer: '', //full name 
    email: '', //from input 
    message: '', //from input 
    spread_event: '' //details
})

  const { register, handleSubmit, errors, reset, watch } = useForm({ 
      mode: "onBlur",
  
    });
  const { push } = useHistory()
  const id = localStorage.getItem('user')

  const onSubmit = (data) => {
      console.log(data)
      
   }


   const sendEmail = (data) => { 
    emailjs.send("service_t9ou68h","template_8w63fep", data, API_KEY)
    .then((message) => { 
        console.log(message)
    })
    .catch((error) => { 
        console.log("There was an error with your invite", error)
    })
   }

  const toggle = () => push(`/user/${id}`);

  return (
    <div className='dashboard-cards'> 
      
      <Modal isOpen={modal} fade={false} toggle={toggle} className={className} >
        <ModalHeader toggle={toggle} >
            <div style={{display:'flex', flexDirection: 'row'}}>
                <h2 style={{margin: '0 auto'}}>Share your Spread ... </h2>
                <img style={{width: '10%'}} src={fries} alt='title-image'/>
            </div>
            </ModalHeader>
        <ModalBody>
        <Form onSubmit={handleSubmit(onSubmit)} id='share-form'>
            
            <Input type="text" 
            placeholder="Email" 
            name="email" 
            invalid={errors.Name ? true : false}
            innerRef={register({required: "You must enter a Title", maxLength: 80})    } 
            />
            <label>Seperate E-mail address with a comma. </label>
            <ErrorMessage errors={errors} name="email" />

            <Input type="textarea" 
            placeholder="Message" 
            name="message" 
            invalid={errors.Name ? true : false}
            innerRef={register} 
            />
        <label>Enter a message about your spread. </label>
        <div className='event-card-btn'>
            <Button color ='primary' type="submit" style={{width:'30%', margin: '20px 10px 20px 10px', }}>Submit</Button>
            <Button onClick={() => reset()} color='danger' style={{width:'30%', margin: '20px 10px 20px 10px', }}>Clear</Button>
        </div>
            </Form>
            </ModalBody>
        
      </Modal>
    </div>
  );
}

export default EmailModal;