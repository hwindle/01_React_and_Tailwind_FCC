import './Input.css';

function Input() {
  return (
    <>
      <fieldset>
        <label for="name">Long name</label>
        <input id="name" name="name" type="text" />
      </fieldset>
    </>
  );
}

export default Input;