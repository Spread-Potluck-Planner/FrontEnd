import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import {Col, Form, Button, Label, Input, FormGroup} from 'reactstrap';
import {useDispatch} from 'react-redux'
import {setLoggedIn} from '../actions/loginActions'
import {useHistory} from 'react-router-dom';
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
                    <Button type='submit' size='lg' color='success'>Sign In</Button>
                    <Button type='button' size='lg' outline color='danger' onClick={() => push('/register')}>Sign Up</Button>
                </div>
            </Form>
        </div>
    )
}
