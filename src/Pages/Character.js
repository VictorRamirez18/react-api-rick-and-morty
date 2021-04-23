import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar.js";

function Character() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setCharacter(response);
        setLoaded(true);
      });
  }, [id]);

  return (
    <Fragment>
      <Navbar />
      {loaded && character.name !== undefined && (
        <div className="p-4 flex justify-center">
          <div className="characterCard flex flex-col sm:flex-row border border-black my-12 p-2 text-lg shadow-2xl ff-l">
            <div className="p-2">
              <p>
                <b>Name: </b>
                {character.name}
              </p>
              <p>
                <b>Status: </b>
                {character.status}
              </p>
              <p>
                <b>Specie: </b> {character.species}
              </p>
              <p>
                <b>Gender: </b> {character.gender}
              </p>
              <p>
                <b>Origin: </b> {character.origin.name}
              </p>
              <p>
                <b>Created: </b> {character.created}
              </p>
            </div>
            <div>
              <img
                src={character.image}
                alt={character.name}
                className="h-full w-auto object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
export default Character;
