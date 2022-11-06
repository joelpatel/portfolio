import ReactLogo from "../../assets/react.png";
import Node from "../../assets/node.png";
import REST from "../../assets/rest.png";
import Go from "../../assets/go.png";
import JS from "../../assets/javascript.png";
import AWS from "../../assets/aws.png";

const Passion = () => {
  const interests = [
    {
      id: 1,
      src: AWS,
      title: "AWS",
    },
    {
      id: 2,
      src: Go,
      title: "Go",
    },
    {
      id: 3,
      src: JS,
      title: "JavaScript",
    },
    {
      id: 4,
      src: REST,
      title: "RESTful APIs",
    },
    {
      id: 5,
      src: Node,
      title: "Node.js",
    },
    {
      id: 6,
      src: ReactLogo,
      title: "React.js",
    },
  ];

  return (
    <div
      name="passion"
      className="pt-20 w-full min-h-screen bg-background text-textColor"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-10/12 h-full">
        <div className="pb-8">
          <p className="text-4xl font-medium inline border-b-4 border-textGray">
            Passion
          </p>
          <p className="pt-4">Technologies I love.</p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {interests.map(({ id, src, title }) => {
            return (
              <div key={id} className="duration-200 hover:scale-110 rounded-lg">
                <a
                  href={`https://www.google.com/search?q=${title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={src} alt="" className="rounded-2xl h-40 mx-auto" />
                  <p className="my-4">{title}</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Passion;
