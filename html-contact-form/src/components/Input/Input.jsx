import './Input.css';

function Input(props) {
  const {displayTitle, name, type, onInputchange} = props;

  return (
    <>
      <fieldset>
        <label htmlFor={name}>{displayTitle}</label>
        <input id={name} name={name} type={type} onChange={onInputchange} />
      </fieldset>
    </>
  );
}

export default Input;