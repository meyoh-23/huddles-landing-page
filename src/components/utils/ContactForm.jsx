import React, { useState } from 'react';
import FormIput from './FormIput';

const ContactForm = () => {
  const [email, setEmail] = useState({email: ""});

  const inputs = [{
    id:111,
    name: "email",
    type: "email",
    placeholder: "Email",
    errorMessage: "Check you email Please",
    label: "Email",
    required: true,
  }]

  const onChange = (e) => {
    setEmail({...email, [e.target.name]: e.target.value})
  }

  return (
    <form className='flex flex-1 justify-between items-center'>
      {
        inputs.map((input) => ( 
          <FormIput
          key={input.id}
          {...input}
          value={email[input.name]}
          onChange={onChange}
          />
        ))
      }
      <button type='button' className='submit__button'>
        subscribe
      </button>
    </form>
  )
}

export default ContactForm;