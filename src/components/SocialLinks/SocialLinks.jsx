import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { CgFileDocument } from "react-icons/cg";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      href: "https://www.linkedin.com/in/joelpatel/",
      style: "rounded-tr-md",
      mobileChild: <FaLinkedin size={30} />,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
    },
    {
      id: 2,
      href: "https://github.com/joelpatel",
      mobileChild: <FaGithubSquare size={30} />,
      child: (
        <>
          GitHub <FaGithubSquare size={30} />
        </>
      ),
    },
    {
      id: 3,
      href: "mailto:joelpatel.cs@gmail.com",
      mobileChild: <HiOutlineMail size={30} />,
      child: (
        <>
          E-Mail <HiOutlineMail size={30} />
        </>
      ),
    },
    {
      id: 4,
      href: "/resume.pdf",
      style: "rounded-br-md",
      mobileChild: <CgFileDocument size={30} />,
      child: (
        <>
          Resume <CgFileDocument size={30} />
        </>
      ),
    },
  ];

  return (
    <>
      <div className="hidden md:flex flex-col top-[38%] left-0 fixed">
        <ul>
          {links.map(({ id, href, style, child, mobileChild }) => {
            return (
              <li
                key={id}
                className={`flex justify-between items-center w-40 h-14 px-4 bg-background-dark border-solid border-t-2 border-r-2 border-b-2 border-textGray ml-[-100px] ${style} hover:rounded-r-md hover:ml-0 duration-300`}
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={href}
                  className="flex justify-between items-center w-full text-white"
                >
                  {child}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div name="contact" className="pt-20 w-full bg-background text-textColor">
        <div className="flex md:hidden flex-col max-w-screen-lg p-4 mx-auto justify-between items-center w-10/12 h-full">
          <span className="flex">
            {links.map(({ id, href, style, child, mobileChild }) => {
              return (
                <span
                  key={id}
                  className={`flex flex-row justify-between items-center h-14 px-4 mx-4 bg-background-dark border-solid border-2 border-textGray rounded-md hover:scale-110 duration-300`}
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={href}
                    className="w-full text-white"
                  >
                    {mobileChild}
                  </a>
                </span>
              );
            })}
          </span>
        </div>
      </div>
    </>
  );
};

export default SocialLinks;
