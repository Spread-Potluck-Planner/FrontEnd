import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom'
import { ErrorMessage } from '@hookform/error-message';
import { axiosWithAuth } from '../utils/axiosWithAuth'
import {Button, FormGroup, Input, Form} from 'reactstrap'

import Navigation from './Navigation'

const AddNewEvent = () => {
    const { register, handleSubmit, errors, reset, watch } = useForm({ 
        mode: "onBlur",
  
      });
    const history = useHistory()
    const id = localStorage.getItem('user')
    const onSubmit = (data) => { 
        const userId = parseInt(id)
        const newSpread = { 
            organizer_id: userId, 
            event_name: data.Name,
            date: data.Date,
            time: data.Time,
            description: data.Description,
            address: data.Address,
            city: data.City,
            state: data.State
        }
        addSpread(newSpread);
        history.push(`/user/${id}`)

    }

    const addSpread = (newSpread) => { 
        axiosWithAuth()
        .post(`https://potluck-planner-bw.herokuapp.com/users/${id}/events`, newSpread)
        .then((response) => { 
            console.log(response.data)
        })
        .catch((error) => { 
            console.log("There was an error creating your event", error)
        })
    }
    
  
    return (
        <div className='add-event-dashboard'>
            <Navigation />
            <div className='dashboard-cards'>
                <h2>Create A Spread</h2>
            <Form onSubmit={handleSubmit(onSubmit)} className='shadow add-event-container'>
                
                <Input type="text" 
                placeholder="Title" 
                name="Name" 
                invalid={errors.Name ? true : false}
                innerRef={register({required: "You must enter a Title", maxLength: 80})    } 
                />
                <ErrorMessage errors={errors} name="Name" />

                <Input type="text" 
                placeholder="Date" 
                name="Date" 
                invalid={errors.Date ? true : false}
                innerRef={register({required: "Date is required", maxLength: 100})   } 
                />
                <ErrorMessage errors={errors} name="Date" />

                <Input type="text" 
                placeholder="Time" 
                name="Time" 
                invalid={errors.Time ? true : false}
                innerRef={register({required: "What time would you like people to come?", maxLength: 10})    } 
                />
                <ErrorMessage errors={errors} name="Time" />

                <Input type='textarea' 
                placeholder="Description goes here" 
                name="Description" 
                invalid={errors.Description ? true : false}
                innerRef={register({required: "Tell us a little something about your potluck.."})} 
                />
                <ErrorMessage errors={errors} name="Description" />

                <Input type="text" 
                placeholder="Address" 
                name="Address" 
                invalid={errors.Address ? true : false}
                innerRef={register({required: "What is the Address?"})} 
                />
                <ErrorMessage errors={errors} name="Address" />

                <Input type="text" 
                placeholder="City" 
                name="City" 
                invalid={errors.City ? true : false}
                innerRef={register({required: "City is required :("})} 
                />
                <ErrorMessage errors={errors} name="City" />

                <Input type="text" 
                placeholder="State" 
                name="State" 
                invalid={errors.State ? true : false}
                innerRef={register({required: "State is required :("})} 
                />
                <ErrorMessage errors={errors} name="State" />

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




  
 