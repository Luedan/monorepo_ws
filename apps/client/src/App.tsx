const App = () => {
  const testApi = async () => {
    const response = await fetch("/api");
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <button type="button" onClick={testApi}>
        Click me
      </button>
    </div>
  );
};

export default App;
