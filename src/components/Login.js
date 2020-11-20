import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import {Col, Form, Button, Label, Input, FormGroup} from 'reactstrap';
import {useDispatch} from 'react-redux'
import {setLoggedIn} from '../actions/loginActions'
import {useHistory} from 'react-router-dom';
import Navigation from '../components/Navigation'
import '../styling/login.css'

export default function Login() {
    const {push} = useHistory()
    const dispatch = useDispatch();

    const {register, handleSubmit, errors} = useForm({
        defaultValues: {
            username: '',
            password: '',
        }
    })

    const submitHandler = (user) => {
        axiosWithAuth()
            .post('https://potluck-planner-bw.herokuapp.com/users/login', user)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('user', res.data.user_id)
                dispatch(setLoggedIn)
                push(`/user/${res.data.user_id}`)
            })
            .catch(err => {
                console.log('There was an error signing in', err)
            })
    }

    return (
        <div className='login-page'>
            <Navigation />
            <div className='login-form'>
            <h2>Please Log In</h2>
                <Form onSubmit={handleSubmit(submitHandler)}>
                    <FormGroup>
                        <Col md={12}>
                        <Label for='username'>User Name</Label>
                        <Input 
                            name='username'
                            type='text' 
                            placeholder='User Name'
                            invalid={errors.username ? true : false}
                            innerRef={register({required: 'Username is required'})}
                        />
                        <ErrorMessage errors={errors} name='password' />
                    </Col>    
                    </FormGroup>
                    <FormGroup>
                        <Col md={12}>
                        <Label for='password'>Password</Label>
                        <Input 
                            name='password'
                            type='password' 
                            placeholder='Password'
                            invalid={errors.password ? true : false}
                            innerRef={register({required: 'Passowrd is required'})}
                        />
                        <ErrorMessage errors={errors} name='password' />
                        </Col>
                    </FormGroup>
                    <div className='login-btns'>
                        <Button type='submit' id='sign-in-btn' size='lg'>Sign In</Button>
                        <Button type='button' id='sign-up-btn' size='lg' onClick={() => push('/register')}>Sign Up</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}
