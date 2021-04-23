// import Home from "../../../HooksReact/hooksreact/src/Pages/Home";
import { useState, useEffect } from "react";
import CardCharacter from "../Components/CardCharacter.js";
import Navbar from "../Components/Navbar.js";

function Home() {
  const [characters, setCharacters] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((response) => {
        setCharacters(response.results);
        setLoaded(true);
      });
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  return (
    <div className="App flex flex-col flex-wrap">
      <Navbar onChange={handleChange} />
      <div className="flex flex-wrap justify-center my-8 gap-4">
        {loaded &&
          characters.map((item, index) => {
            if (!item.name.toLowerCase().startsWith(search.toLowerCase()))
              return false;
            return (
              <CardCharacter
                name={item.name}
                specie={item.species}
                image={item.image}
                url={item.url}
                index={index + 1}
                key={index}
              />
            );
          })}
      </div>
    </div>
  );
}
export default Home;
