import "./App.css";

const Message = (props) => {
  // get values out of objects.
  const { text, bgColor } = props;
  return <h2 style={{ background: bgColor }}>{text}</h2>;
};

const Box = (props) => {
  const {label, bgColor} = props;

  return (<div style={{background: bgColor}}>
    {label}
  </div>);
};

function App() {
  return (
    <div className="App">
      <Message className="text-3xl" text="first prop" />
      <Box label="Grey box" 
          bgColor="#BBB"

      />
    </div>
  );
}

export default App;
