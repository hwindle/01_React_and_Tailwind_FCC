import './SubmitButton.css';

function SubmitButton({onFormSubmit}) {
  return (
    <input id="submit-btn" type="submit" value="Submit" onClick={onFormSubmit} />
  );
}

export default SubmitButton;