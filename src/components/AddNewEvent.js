import React from 'react';
import { useForm } from 'react-hook-form';

const AddNewEvent = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
  
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Name" name="Name" ref={register({required: true, maxLength: 80})} />
          <input type="text" placeholder="Date" name="Date" ref={register({required: true, maxLength: 100})} />
          <input type="text" placeholder="Time" name="Time" ref={register({required: true, maxLength: 10})} />
          <textarea name="Description" ref={register({required: true})} />
          <input type="text" placeholder="Address" name="Address" ref={register({required: true})} />
          <input type="text" placeholder="City" name="City" ref={register({required: true})} />
          <input type="text" placeholder="State" name="State" ref={register({required: true})} />
    
          <input type="submit" />
        </form>
      );
    }
 
export default AddNewEvent;




  
 