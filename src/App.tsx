import Login from "./Login";

function App() {
  const handleLogin = (username: string, password: string) => {
    console.log(username, password);
  };

  return (
    <div>
      <Login onSubmit={handleLogin} />
    </div>
  );
}

export default App;
