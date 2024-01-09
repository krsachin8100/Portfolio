import "../styles/home.css";
import { FaRegUser } from "react-icons/fa6";
import { IoChevronForwardOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="home">
      <div className="subhome">
        <div className="img">
          <FaRegUser className="imgicon" />
        </div>
        <div className="details">
          <div class="fdetail">
            <h2 style={{ display: "flex" }}>
              <IoChevronForwardOutline />
              I'M SACHIN KUMAR
            </h2>
            <h3 style={{ display: "flex" }}>WEB DEVELOPER</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into .
            </p>
          </div>
          <div>
            <button className="fbtn">
              More about me
              <span className="btnarrows">
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
