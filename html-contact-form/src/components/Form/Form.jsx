import './Form.css';
import Input from '../Input/Input';
import RadioInputs from '../RadioInputs/RadioInputs';
import Textarea from '../Textarea/Textarea';
import SubmitButton from '../SubmitButton/SubmitButton';
import CancelButton from '../CancelButton/CancelButton';


function Form() {
  return (
    <form>
      <Input />
      <Input />
      <RadioInputs />
      <Textarea />
      <SubmitButton />
      <CancelButton />
    </form>
  );
}

export default Form;