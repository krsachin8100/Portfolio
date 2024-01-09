import "../styles/nav.css";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { AiFillSignal } from "react-icons/ai";
import { RiMessage3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <div className="subnav">
        <div className="nicon">
          <Link to="/">
            <FaHome />
          </Link>
        </div>
        <div className="nicon">
          <Link to="/about">
            <FaUser />
          </Link>
        </div>
        <div className="nicon">
          <Link to="/work">
            <FaBuilding />
          </Link>
        </div>
        <div className="nicon">
          <Link to="/achieve">
            <AiFillSignal />
          </Link>
        </div>
        <div className="nicon">
          <Link to="/faq">
            <RiMessage3Fill />
          </Link>
        </div>
      </div>
    </div>
  );
}
