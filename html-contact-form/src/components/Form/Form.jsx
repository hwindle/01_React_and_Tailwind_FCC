import './Form.css';
import Input from '../Input/Input';
import RadioInputs from '../RadioInputs/RadioInputs';
import Textarea from '../Textarea/Textarea';
import SubmitButton from '../SubmitButton/SubmitButton';
import CancelButton from '../CancelButton/CancelButton';


function Form() {
  const options = {option1: 'General enquiry', option2: 'Support request'};
  const names = {name1: 'general', name2: 'support'};

  return (
    <form>
      <Input displayTitle='First name' name='firstName' type='text' />
      <Input displayTitle='Last name' name='lastName' type='text' />
      <Input displayTitle='Email' name='email' type='email' />
      <RadioInputs options={options} optionNames={names} />
      <Textarea />
      <SubmitButton />
      <CancelButton />
    </form>
  );
}

export default Form;