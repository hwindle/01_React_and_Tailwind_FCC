const QuoteBox = (props) => {
  const {text, author, bio} = props.quote;

  return (
    <section className="flex flex-col border border-cyan-800">
      <div className="bg-cyan-800 text-slate-100 p-5 m-4">
        {text}
      </div>
      <div className="bg-slate-100 p-5 m-4">
        {author}
        <p>{bio}</p>
      </div>
    </section>
  );
};

export default QuoteBox;