import React from 'react';
import { useForm } from 'react-hook-form';
import {Button, FormGroup,Label, Input, Textarea} from 'reactstrap'

import Navigation from './Navigation'

const AddNewEvent = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
  
    return (
        <div className='dashboard'>
            <Navigation />
            <div className='dashboard-cards'>
            <form onSubmit={handleSubmit(onSubmit)} className='add-event-container'>
                <FormGroup>
                <Input type="text" placeholder="Name" name="Name" ref={register({required: true, maxLength: 80})    } />
                </FormGroup>
                <Input type="text" placeholder="Date" name="Date" ref={register({required: true, maxLength: 100})   } />
                <Input type="text" placeholder="Time" name="Time" ref={register({required: true, maxLength: 10})    } />
                <Input type='textarea' placeholder="Description goes here" name="Description" ref={register({required: true})} />
                <Input type="text" placeholder="Address" name="Address" ref={register({required: true})} />
                <Input type="text" placeholder="City" name="City" ref={register({required: true})} />
                <Input type="text" placeholder="State" name="State" ref={register({required: true})} />
    
                <Button color ='primary' type="submit" style={{width:'50%', margin: '20px auto 20px auto', }}>Submit</Button>
            </form>
          
          
          
          
         </div>
        </div>
        
      );
    }
 
export default AddNewEvent;




  
 