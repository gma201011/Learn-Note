const { useRef, useEffect } = React;

function App() {
  const inputValue = useRef(null);

  const handleInputOnChange = () => {
    console.log(inputValue.current.value)
  };

  return (
    <>
      <input ref={inputValue} onChange={handleInputOnChange} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
