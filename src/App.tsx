import CocktailsSearch from "./CocktailsSearch";

function App() {
  if (process.env.NODE_ENV === "development") {
    const { worker } = require("./mocks/mockServer");
    worker.start();
  }
  return (
    <div>
      <CocktailsSearch />
    </div>
  );
}

export default App;
