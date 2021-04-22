// import Home from "../../../HooksReact/hooksreact/src/Pages/Home";
import { useState, useEffect } from "react";
import CardCharacter from "../Components/CardCharacter.js";

function Home() {
  const [characters, setCharacters] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((response) => {
        setCharacters(response.results);
        setLoaded(true);
      });
  }, []);

  return (
    <div className="App flex flex-col flex-wrap">
      <div>
        <h2 className="bg-red-400">Navbar</h2>
      </div>
      <div className="flex flex-wrap justify-center my-2 gap-4">
        {loaded &&
          characters.map((item) => {
            return (
              <CardCharacter
                name={item.name}
                specie={item.species}
                image={item.image}
                url={item.url}
              />
            );
          })}
      </div>
    </div>
  );
}
export default Home;
