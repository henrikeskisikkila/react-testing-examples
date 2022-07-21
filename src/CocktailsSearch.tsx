/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useState, FormEvent } from "react";
import fetchCocktails from "./api/fetchCocktails";

interface Cocktail {
  idDrink: number;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
}

function CocktailsSearch() {
  const [result, setResult] = useState<Array<Cocktail>>([]);
  const [query, setQuery] = useState<string>("");

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!query) {
      return;
    }
    const result = await fetchCocktails(query);
    if (result) {
      setResult(result);
    }
    setQuery("");
  };

  const searchResults = result.map((item: Cocktail, index) => (
    <div key={index} css={{ marginBottom: "4em" }}>
      <h1>{item.strDrink}</h1>
      <img
        src={item.strDrinkThumb}
        alt={item.strDrink}
        css={{ maxWidth: "80vw" }}
      />
      <p>{item.strInstructions}</p>
    </div>
  ));

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input onChange={(event) => setQuery(event.target.value)} />
        <button type="submit">Search</button>
      </form>
      <div>
        <div>{searchResults}</div>
      </div>
    </div>
  );
}

export default CocktailsSearch;
