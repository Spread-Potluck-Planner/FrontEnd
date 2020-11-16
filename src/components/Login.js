import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {useHistory} from 'react-router-dom'

//initializing form structure
const initialState = {
    username: '',
    password: '',
}

export default function Login() {
    const [credentials, setCredentials] = useState(initialState);
    const {push} = useHistory()

    //tracking user input
    const changeHandler =  (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    //posting to verify if user has account
    const submitHandler = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('https://potluck-planner-bw.herokuapp.com/users/login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                push('/home_page')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input name='username' type='text' value={credentials.username} onChange={changeHandler} placeholder='User Name'/>
                <input name='password' type='password' value={credentials.password} onChange={changeHandler} placeholder='Passord'/>
                <button>Log in</button>
            </form>
        </div>
    )
}
