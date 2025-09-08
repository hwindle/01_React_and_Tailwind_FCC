const FancyButton = (props) => {
  const {children, large} = props;

  const largeStyles = large ? "text-2xl" : "text-base";

  return (<button className={`bg-blue-200 border-2 border-blue-700 text-blue-700 ${largeStyles} px-10 py-2 m-4 rounded-md`}>
    {children}
  </button>);
};

export default FancyButton;