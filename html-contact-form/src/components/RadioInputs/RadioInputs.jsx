import "./RadioInputs.css";

function RadioInputs() {
  return (
    <>
      <h4 className="radio-title">Query Type</h4>
      <fieldset>
        <div className="form-group">
          <input id="name" name="name" type="radio" />
          <label for="name">opt 1</label>
        </div>
        <div className="form-group">
          <input id="name" name="name" type="radio" />
          <label for="name">opt 2</label>
        </div>
      </fieldset>
    </>
  );
}

export default RadioInputs;
