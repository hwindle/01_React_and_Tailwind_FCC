const QuoteBox = (props) => {
  const {text, author, bio} = props.quote;

  return (
    <section className="flex flex-col m-6">
      <div className="bg-cyan-800 text-slate-100 p-5 w-[400px] rounded-t-md center text-2xl">
        {text}
      </div>
      <div className="bg-slate-100 p-5 text-lg rounded-bg-md center text-bold">
        {author}
        <p className="text-slate-400 text-base">{bio}</p>
      </div>
    </section>
  );
};

export default QuoteBox;