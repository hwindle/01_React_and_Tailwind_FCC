import "./RadioInputs.css";

function RadioInputs({options, optionNames}) {
  return (
    <>
      <h4 className="radio-title">Query Type</h4>
      <fieldset id="radio">
        <div className="form-group">
          <input id={optionNames.name1} name="queryType" type="radio" />
          <label htmlFor={optionNames.name1}>{options.option1}</label>
        </div>
        <div className="form-group">
          <input id={optionNames.name2} name="queryType" type="radio" />
          <label htmlFor={optionNames.name2}>{options.option2}</label>
        </div>
      </fieldset>
    </>
  );
}

export default RadioInputs;
