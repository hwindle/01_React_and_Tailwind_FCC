import logo from "./logo.svg";
import "./App.css";

const Message = (props) => {
  // get values out of objects.
  const { text, bgColor } = props;
  return <h2 style={{ background: bgColor }}>{text}</h2>;
};

function App() {
  return (
    <div className="App">
      <Message text="first prop" bgColor="lavender" />
    </div>
  );
}

export default App;
