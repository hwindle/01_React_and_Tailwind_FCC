import './Form.css';
import Input from '../Input/Input';
import RadioInputs from '../RadioInputs/RadioInputs';
import Textarea from '../Textarea/Textarea';
import SubmitButton from '../SubmitButton/SubmitButton';
import CancelButton from '../CancelButton/CancelButton';

import { useState } from 'react';


function Form() {
  const options = {option1: 'General enquiry', option2: 'Support request'};
  const names = {name1: 'general', name2: 'support'};
  // state
  const [firstName, setFirstName] = useState('');
  const [firstNameValid, setFirstNameValid] = useState(false);
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
    if (firstName.length >= 3) {
      setFirstNameValid(true);
    }
  }

  function handleEmailChange(event) {
    const enteredEmail = event.target.value;
    if (enteredEmail.contains('@') && enteredEmail.length > 10) {
      setEmail(enteredEmail);
      setEmailValid(true);
    } else {
      setEmail('');
      setEmailValid(false);
    }    
  }

  function handleSubmitForm(event) {
    event.preventDefault;
    console.log(`First name: {firstName}, email: {email}`);
  }


  return (
    <form>
      <Input displayTitle='First name' name='firstName' type='text' onInputChange={handleFirstNameChange} />
      <Input displayTitle='Last name' name='lastName' type='text' />
      <Input displayTitle='Email' name='email' type='email' onInputChange={handleEmailChange} />
      <Input displayTitle='Password' name='password' type='password' />
      <RadioInputs options={options} optionNames={names} />
      <Textarea name='message' />
      <SubmitButton onFormSubmit={handleSubmitForm} />
      <CancelButton />
    </form>
  );
}

export default Form;