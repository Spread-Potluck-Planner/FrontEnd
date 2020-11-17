import React from 'react';
import {useHistory} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import {Form, Button, Label, Input, FormGroup} from 'reactstrap';
import axios from 'axios';

export default function Register() {
    const {push} = useHistory();
    const {register, handleSubmit, errors} = useForm({
        mode: 'onBlur',
        defaultValues: {
            full_name: '',
            email: '',
            username: '',
            password: '',
        }
    })

    const registerHandler = (user) => {
        axios
            .post('https://potluck-planner-bw.herokuapp.com/users/register', user)
            .then(res => {
                push('/')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className='register-form'>
            <Form onSubmit={handleSubmit(registerHandler)}>
                <FormGroup>
                    <Label for='full_name'>Name</Label>
                    <Input 
                        name='full_name'
                        type='text'
                        placeholder='Please enter your full name'
                        invalid={errors.full_name ? true : false}
                        innerRef={register({required: 'Your name is required', minLength: 5})}
                    />
                    <ErrorMessage errors={errors} name='full_name' />
                </FormGroup>
                <FormGroup>
                    <Label for='email'>Email</Label>
                    <Input 
                        name='email'
                        type='email'
                        placeholder='Please enter your email'
                        invalid={errors.email ? true : false}
                        innerRef={register({required: 'Your email is required'})}
                    />
                    <ErrorMessage errors={errors} name='email' />
                </FormGroup>
                <FormGroup>
                    <Label for='username'>User Name</Label>
                    <Input 
                        name='username'
                        type='text' 
                        placeholder='User Name'
                        invalid={errors.username ? true : false}
                        innerRef={register({required: 'Username is required', minLength: 4})}
                    />
                    <ErrorMessage errors={errors} name='username' />
                </FormGroup>
                <FormGroup>
                    <Label for='password'>Password</Label>
                    <Input 
                        name='password'
                        type='password' 
                        placeholder='Password'
                        invalid={errors.password ? true : false}
                        innerRef={register({required: 'Password is required', minLength: 4})}
                    />
                    <ErrorMessage errors={errors} name='password' />
                </FormGroup>
                <Button type='submit' color='primary'>Create Account</Button>
                <Button type='button' color='gray' onClick={() => push('/')}>Cancel</Button>
            </Form>
        </div>
    )
}
