const ErrorExample = () => {
  let count = 0;
  const increment = () => {
    count = count + 1;
    console.log(count);
  };

  return (
    <div>
      <h2>{count}</h2>;
      <button type="button" className="btn" onClick={increment}>click me</button>
    </div>
  );
};

export default ErrorExample;
