import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-background">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full w-10/12 xl:w-full">
          <h2 className="text-4xl sm:text-7xl font-medium text-textColor">
            I'm a Full Stack Developer.
          </h2>
          <p className="text-textGray font-extralight py-4 max-w-lg md:max-w-4xl">
            I am in the final semester of my Masters degree in Computer Science.
            Actively seeking for Software Engineer / Full Stack Developer /
            Backend Developer / Frontend Developer job opportunities.
          </p>
          <div>
            <Link to="portfolio" smooth duration={500}>
              <button className="group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-textColor via-[#cacaca] to-[#2f2f2f] duration-200 hover:scale-105 cursor-pointer">
                Portfolio
                <span className="hidden md:flex group-hover:rotate-90 duration-200">
                  <MdOutlineKeyboardArrowRight size={20} />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
