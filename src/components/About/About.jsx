const About = () => {
  return (
    <div
      name="about"
      className="pt-20 w-full h-screen bg-background text-textColor"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-10/12 h-full">
        <div className="pb-8">
          <p className="text-4xl font-medium inline border-b-4 border-textGray">
            About
          </p>
        </div>

        <p className="text-xl mt-3 ">
          Software Engineer with Masters in Computer Science. I like to be at
          the forefront of new technologies. Ability and Eagerness to learn new
          skills quickly, proven by excelling in courses about which I knew
          little and achieving a{" "}
          <span className="hover:underline hover:underline-offset-4">3.85</span>{" "}
          GPA. I am a hard-working, dedicated software engineer.
        </p>

        <br />
        <p className="text-xl">
          I enjoy watching good space movies and shows. My favorites are{" "}
          <a
            className="hover:underline hover:underline-offset-4"
            href="https://www.imdb.com/title/tt0118884/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact (1997)
          </a>
          ,{" "}
          <a
            className="hover:underline hover:underline-offset-4"
            href="https://www.imdb.com/title/tt0816692/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Interstellar
          </a>
          ,{" "}
          <a
            className="hover:underline hover:underline-offset-4"
            href="https://www.imdb.com/title/tt10394800/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Planets
          </a>
          , and{" "}
          <a
            className="hover:underline hover:underline-offset-4"
            href="https://www.imdb.com/title/tt2395695/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cosmos
          </a>
          . My main hobby is learning new things about the vaste cosmos that we
          live in.
        </p>
      </div>
    </div>
  );
};

export default About;
