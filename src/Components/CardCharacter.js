import { Link } from "react-router-dom";

function CardCharacter({ name, specie, image, index }) {
  return (
    <Link to={`/Character/${index}`} className="w-2/3 sm:w-1/3 md:w-1/5 lg:1/5">
      <div className="card p-2 text-lg bg-blue-200 h-auto w-full flex flex-col justify-center text-center shadow-2xl ff-l">
        <p className="my-2">
          <b>{name}</b>
        </p>
        <p className="mt-2 mb-4">
          <b>Specie: </b>
          {specie}
        </p>
        <img src={image} alt={name}></img>
      </div>
    </Link>
  );
}

export default CardCharacter;
