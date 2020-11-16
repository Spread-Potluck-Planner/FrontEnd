import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import {Form, Button, Label, Input, FormGroup} from 'reactstrap';
import {useDispatch} from 'react-redux'
import {setLoggedIn} from '../actions/loginActions'
import {useHistory} from 'react-router-dom';

export default function Login() {
    const {push} = useHistory()
    const dispatch = useDispatch();

    const {register, handleSubmit, errors, reset} = useForm({
        defaultValues: {
            username: '',
            password: '',
        }
    })

    // //tracking user input
    // const changeHandler =  (e) => {
    //     setCredentials({
    //         ...credentials,
    //         [e.target.name]: e.target.value
    //     })
    // }

    //posting to verify if user has account
    const submitHandler = (user) => {
        axiosWithAuth()
            .post('https://potluck-planner-bw.herokuapp.com/users/login', user)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.token)
                dispatch(setLoggedIn)
                push('/home_page')
            })
            .catch(err => {
                console.log('There was an error signing in', err)
            })
    }

    return (
        <div className='login-form'>
            <Form onSubmit={handleSubmit(submitHandler)}>
                <FormGroup>
                    <Label for='username'>User Name</Label>
                    <Input 
                        name='username'
                        type='text' 
                        placeholder='User Name'
                        invalid={errors.username ? true : false}
                        innerRef={register({required: 'Username is required'})}
                    />
                    <ErrorMessage errors={errors} name='password' />
                </FormGroup>
                <FormGroup>
                    <Label for='password'>Password</Label>
                    <Input 
                        name='password'
                        type='password' 
                        placeholder='Password'
                        invalid={errors.password ? true : false}
                        innerRef={register({required: 'Passowrd is required'})}
                    />
                    <ErrorMessage errors={errors} name='password' />
                </FormGroup>
                <Button type='submit' color='primary'>Sign In</Button>
                <Button type='button' color='gray' onClick={() => push('/register')}>Sign Up</Button>
            </Form>
        </div>
    )
}
