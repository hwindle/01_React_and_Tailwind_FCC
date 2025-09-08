//import { useState } from 'react';
import FancyButton from './FancyButton';
import QuoteBox from './QuoteBox';
import cat from './assets/pics/cat.jpg';
import './App.css';

const Cat = () => {
  return <div><img width={300} height={300} src={cat} /></div>;
};

const quote1 = {
  text: "If we want users to like our software, we should design it to behave like a likable person.",
  author: "Alan Cooper",
  bio: "Software developer"
};

const quote2 = {
  text: "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
  author: "Linus Torvalds",
  bio: "Linux kernel developer/inventor"
};

const quote3 = {
  text: "You might not think that programmers are artists, but programming is an extremely creative profession. It’s logic-based creativity.",
  author: "John Romero",
  bio: "Software developer"
};

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center">
        <QuoteBox quote={quote1} />
      </div>
    </>
  );
}

export default App;
