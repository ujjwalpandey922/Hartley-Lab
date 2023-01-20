import { AiOutlineSearch } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    nav("/login");
  };
  return (
    <div className="app__header">
      <div className="app__header-img">
        <span>Logo</span>
      </div>
      <div className="app__header-nav">
        <div className="app__header-nav_logos">
          <div className="app__header-nav_logos-search">
            <AiOutlineSearch />
            <p>Search</p>
          </div>
          <div className="app__header-nav_logos-search">
            <FaUserCircle />
            <p>Signed In</p>
          </div>
          <div className="app__header-nav_logos-search">
            <FaShoppingBag />
            <p>(0)</p>
          </div>
        </div>
        <div className="app__header-nav_list">
          <ul>
            <li>Classes</li>
            <li>Programs & Events</li>
            <li>Blogs</li>
            <li>About</li>
            <li>Get Involed</li>
          </ul>
          <button onClick={handleClick}>LogOut</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
