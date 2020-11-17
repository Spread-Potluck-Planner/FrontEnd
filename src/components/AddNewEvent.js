import React from 'react';
import { useForm } from 'react-hook-form';
import {Button, FormGroup, Input, Form} from 'reactstrap'

import Navigation from './Navigation'

const AddNewEvent = () => {
    const { register, handleSubmit, errors, reset } = useForm();
    const onSubmit = data => console.log(data);
    
  
    return (
        <div className='dashboard'>
            <Navigation />
            <div className='dashboard-cards'>
            <Form onSubmit={handleSubmit(onSubmit)} className='add-event-container'>
                
                <input type="text" 
                placeholder="Name" 
                name="Name" 
                ref={register({required: true, maxLength: 80})    } 
                />
                
                <Input type="text" 
                placeholder="Date" 
                name="Date" 
                innerRef={register({required: true, maxLength: 100})   } 
                />
                <Input type="text" 
                placeholder="Time" 
                name="Time" 
                innerRef={register({required: true, maxLength: 10})    } 
                />
                <Input type='textarea' 
                placeholder="Description goes here" 
                name="Description" 
                innerRef={register({required: true})} 
                />
                <Input type="text" 
                placeholder="Address" 
                name="Address" 
                innerRef={register({required: true})} 
                />
                <Input type="text" 
                placeholder="City" 
                name="City" 
                innerRef={register({required: true})} 
                />
                <Input type="text" 
                placeholder="State" 
                name="State" 
                innerRef={register({required: true})} 
                />
                <FormGroup>
                <Button color ='primary' type="submit" style={{width:'30%', margin: '20px 10px 20px 10px', }}>Submit</Button>
                <Button onClick={() => reset()} color='danger' style={{width:'30%', margin: '20px 10px 20px 10px', }}>Clear</Button>
                
                
                </FormGroup>
            </Form>
          
          
          
          
         </div>
        </div>
        
      );
    }
 
export default AddNewEvent;




  
 