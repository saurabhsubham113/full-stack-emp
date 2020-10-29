import './App.css';

function App() {
  const resp = async () => {
    const res = await fetch('/list')
    const body = await res.json()
    console.log(body);
    return body;
  }
  return (
    <div className="App">
      <button onClick={resp}>click me</button>
      
    </div>
  );
}

export default App;
