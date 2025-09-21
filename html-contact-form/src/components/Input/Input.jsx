import './Input.css';

function Input(props) {
  const {displayTitle, name, type} = props;

  return (
    <>
      <fieldset>
        <label htmlFor={name}>{displayTitle}</label>
        <input id={name} name={name} type={type} />
      </fieldset>
    </>
  );
}

export default Input;