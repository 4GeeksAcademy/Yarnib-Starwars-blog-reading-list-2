import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTrashArrowUp } from "@fortawesome/free-solid-svg-icons";
import "../../styles/home.css";



export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light mb-3 navbar-with-background-image">
      <div className="d-flex align-items-center justify-content-between w-100">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img
              className="navbarImage"
              src="https://clipart.info/images/ccovers/1513370389Star%20Wars%20Logo%20transparent%20PNG.png"
              alt="Star Wars Logo"
            />
          </span>
        </Link>
        <Link to="/">
          <div className="dropdown px-4">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites {store.favorites.length}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {store.favorites.length > 0 ? (
                store.favorites.map((item, index) => (
                  <li key={index}>
                    <a className="dropdown-item" href="#">
                      {item.name}{' '}
                      <span onClick={() => actions.removeFavorites(index)}>
                        <FontAwesomeIcon icon={faTrashArrowUp} />
                      </span>
                    </a>
                  </li>
                ))
              ) : (
                <li>No favorites</li>
              )}
            </ul>
          </div>{' '}
        </Link>
      </div>
    </nav>
  );
};
