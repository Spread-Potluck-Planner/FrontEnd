import React, {useEffect} from 'react'
import {Button, FormGroup, Input, Form} from 'reactstrap'
import { useForm } from 'react-hook-form';
import {useParams, useHistory} from 'react-router-dom'
import { ErrorMessage } from '@hookform/error-message';
import { axiosWithAuth } from '../utils/axiosWithAuth'
import Navigation from '../components/Navigation'
import '../App.css'

export default function EditPotluck() {
    const {id} = useParams()
    const {push} = useHistory()

    const { register, handleSubmit, errors, reset } = useForm({ 
        mode: "onBlur",
        defaultValues: {
            organizer_id: '', 
            event_name: '',
            date: '',
            time: '',
            description: '',
            address: '',
            city: '',
            state: ''
        }
      });

    useEffect(() => {
        axiosWithAuth()
        .get(`https://potluck-planner-bw.herokuapp.com/events/${id}`)
            .then(res => {
                console.log(res)
                reset({
                    organizer_id: res.data.organizer_id, 
                    event_name: res.data.event_name,
                    date: new Date(res.data.date).toUTCString().split('').splice(0,17).join(''),
                    time: res.data.time,
                    description: res.data.description,
                    address: res.data.address,
                    city: res.data.city,
                    state: res.data.state
                })
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    
    const onSubmit = newUser => {
        axiosWithAuth()
            .put(`https://potluck-planner-bw.herokuapp.com/events/${id}`, newUser)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        push(`/events/${id}`)
    }
    
    return (
        <div className='add-event-dashboard'>
            <Navigation />
            <div className='dashboard-cards' id='edit-event-buttons'>
                <h2>What would you like to edit?</h2>
                <Form className='shadow add-event-container'>
                    
                    <Input type="text" 
                    placeholder="Title" 
                    name="event_name" 
                    invalid={errors.event_name ? true : false}
                    innerRef={register({required: "You must enter a Title", maxLength: 80})    } 
                    />
                    <ErrorMessage errors={errors} name="event_name" />

                    <Input type="text" 
                    placeholder="date" 
                    name="date" 
                    invalid={errors.date ? true : false}
                    innerRef={register({required: "date is required", maxLength: 100})   } 
                    />
                    <ErrorMessage errors={errors} name="date" />

                    <Input type="text" 
                    placeholder="Time" 
                    name="time" 
                    invalid={errors.time ? true : false}
                    innerRef={register({required: "What time would you like people to come?", maxLength: 10})    } 
                    />
                    <ErrorMessage errors={errors} name="time" />

                    <Input type='textarea' 
                    placeholder="Description goes here" 
                    name="description" 
                    invalid={errors.description ? true : false}
                    innerRef={register({required: "Tell us a little something about your potluck.."})} 
                    />
                    <ErrorMessage errors={errors} name="description" />

                    <Input type="text" 
                    placeholder="address" 
                    name="address" 
                    invalid={errors.address ? true : false}
                    innerRef={register({required: "What is the Address?"})} 
                    />
                    <ErrorMessage errors={errors} name="address" />

                    <Input type="text" 
                    placeholder="City" 
                    name="city" 
                    invalid={errors.city ? true : false}
                    innerRef={register({required: "City is required :("})} 
                    />
                    <ErrorMessage errors={errors} name="city" />

                    <Input type="text" 
                    placeholder="State" 
                    name="state" 
                    invalid={errors.state ? true : false}
                    innerRef={register({required: "State is required :("})} 
                    />
                    <ErrorMessage errors={errors} name="state" />

                    <FormGroup>
                        <Button id='confirm-btn' type="button" onClick={handleSubmit(onSubmit)} style={{width:'30%', margin: '20px 10px 20px 10px', }}>Confirm</Button>
                        <Button id='cancel-btn' type='button' onClick={() => push(`/events/${id}`)} color='danger' style={{width:'30%', margin: '20px 10px 20px 10px', }}>Cancel</Button>
                    </FormGroup>
                    
                </Form>
            </div>
        </div>
    )
}