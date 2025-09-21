import './Textarea.css';

function Textarea({name}) {
  return (
    <>
      <h4>Message</h4>
      <textarea name={name}>
      </textarea>
    </>
  );
}

export default Textarea;