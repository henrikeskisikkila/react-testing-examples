import Counter from "./Counter";

function App() {
  const handleLogin = (username: string, password: string) => {
    console.log(username, password);
  };

  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
