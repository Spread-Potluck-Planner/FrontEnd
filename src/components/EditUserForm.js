import React from 'react';
import { useForm } from 'react-hook-form';
import {useHistory, useParams} from 'react-router-dom';
import { ErrorMessage } from '@hookform/error-message';
import {Form, Button, Label, Input, FormGroup} from 'reactstrap';
import {axiosWithAuth} from '../utils/axiosWithAuth'

import Navigation from './Navigation'

const EditUserForm = () => {
      const {push} = useHistory();
      const {id} = useParams()
      const { register, handleSubmit, errors, reset } = useForm({ 
        mode: "onBlur",
  
      });

      const onSubmit = (data) => {
        updateUser(data)
      }

      const deleteUser = () => { 
          axiosWithAuth()
          .delete(`https://potluck-planner-bw.herokuapp.com/users/${id}`)
          .then((response) => { 
              alert("Your account has been removed.")
              push('/')
          })
          .catch((error) => { 
              console.log("There was an error deleting the user.", error)
          })
      }
  
      const updateUser= (user) => {
          axiosWithAuth()
              .put(`https://potluck-planner-bw.herokuapp.com/users/${id}`, user)
              .then(res => {
                  alert("Your name has been updated.")
                  localStorage.removeItem('token')
                  push('/')
              })
              .catch(err => {
                  console.log(err)
              })
      }
  
      return (

        <div className='dashboard'>
            <Navigation />
            <div className='dashboard-cards'>
                <h2>Update Account Details</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup id='edit-form-group'>
                    <Label for='full_name'>Name</Label>
                    <Input type="text" 
                    placeholder="Full Name" 
                    name="full_name" 
                    invalid={errors.full_name ? true : false}
                    innerRef={register({required: "You must make a change to update your account.", maxLength: 80})    } 
                />
                  </FormGroup>
                  <ErrorMessage errors={errors} name='full_name' />
                  <div id='btn-group'>
                    <Button type='submit' color='warning'>Submit</Button>
                    <Button type='button' color='danger' onClick={() => deleteUser()}>Delete User</Button>
                  </div>
              </Form>
            </div>
        </div>    
      )
}
 
export default EditUserForm;