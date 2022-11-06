import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

import styles from "./NavBar.module.css";

const NavBar = () => {
  const [hamburger, setHamburger] = useState(true);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "passion",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div
      className={`${styles["unselectable"]} flex justify-between items-center w-full h-20 px-4 z-50 bg-background-dark text-textColor fixed`}
    >
      <div>
        <h1 className="ml-2 text-5xl font-signature">Joel</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-textGray hover:scale-110 duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>

      <div
        className="md:hidden cursor-pointer pr-4 z-50 text-textGray"
        onClick={() => {
          setHamburger((prevState) => {
            return !prevState;
          });
        }}
      >
        {hamburger ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {!hamburger && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen backdrop-blur bg-white/10 text-textGray">
          {links.map(({ id, link }) => {
            return (
              <li
                className="px-4 cursor-pointer capitalize my-6 text-4xl"
                key={id}
              >
                <Link to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
