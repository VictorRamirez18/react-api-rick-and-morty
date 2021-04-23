import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useParams } from "react-router-dom";

function Navbar({ onChange }) {
  const { id } = useParams();
  let disabled = id !== undefined ? true : false;
  return (
    <div className="navbar h-20 flex justify-center p-2">
      <div className="w-1/3 sm:w-1/2">
        <Link to="/" className="">
          <img src={logo} alt="logoRickAndMorty" className="h-full" />
        </Link>
      </div>
      <div className="w-2/3 sm:w-1/2 flex items-center justify-center">
        <div className="flex border border-black w-full sm:w-1/2">
          <input
            type="text"
            className="w-full sm:w-3/4"
            onChange={onChange}
            disabled={disabled}
          />
          <div className="w-1/4 flex justify-center items-center bg-green-400">
            <BsSearch />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
