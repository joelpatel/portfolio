import { BsArrowRight } from "react-icons/bs";

const Portfolio = () => {
  const lineStyle =
    "before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-textGray";
  const projects = [
    {
      id: 1,
      title: "Credentials",
      dates: (
        <>
          <span className="inline-flex justify-start items-center">
            <span className="mr-2">12 - 01 - 2022</span>
            <BsArrowRight className="mr-2" color="textGray" size={10} />{" "}
            <span className="mr-2">12 - 14 - 2022</span>
          </span>
        </>
      ),
      description:
        "Built a fullstack cloud native web app using React, Go, AWS Lambda, AWS DynamoDB, AWS API Gateway, Bootstrap, Firebase to manage passwords by leveraging AES Encryption to store credentials securely.",
      demoLink: "https://credentials-enc.web.app/",
      lineStyle: lineStyle,
    },
    {
      id: 2,
      title: "Disaster Relief Funds Management System",
      dates: (
        <>
          <span className="inline-flex justify-start items-center">
            <span className="mr-2">09 - 01 - 2022</span>
            <BsArrowRight className="mr-2" color="textGray" size={10} />{" "}
            <span className="mr-2">12 - 04 - 2022</span>
          </span>
        </>
      ),
      description:
        "Developed and Deployed a Decentralized Web Application (Web3.0) using which people can donate to help in relief efforts around the world. Enforcing blockchain to make donation history and usage info. public. Additionally, implemented a trading system to trade Ethers with our custom ERC20 token (PSH), using which users can donate tokens.",
      demoLink: "https://drfms-web3.web.app",
      lineStyle: lineStyle,
    },
    {
      id: 3,
      title: "Social Media REST & WebSocket APIs",
      dates: (
        <span className="inline-flex justify-start items-center">
          <span className="mr-2">10 - 06 - 2022</span>
          <BsArrowRight className="mr-2" color="textGray" size={10} />{" "}
          <span className="mr-2">10 - 09 - 2022</span>
        </span>
      ),
      description:
        "Using Node.js, Express.js & WebSockets, built RESTful APIs for an image based social media platform.",
      lineStyle: lineStyle,
      codeLink: "https://github.com/joelpatel/nodejs-course/tree/27-websockets",
    },
    {
      id: 4,
      title: "DeFi Decentralized Application",
      dates: (
        <span className="inline-flex justify-start items-center">
          <span className="mr-2">09 - 25 - 2022</span>
          <BsArrowRight className="mr-2" color="textGray" size={10} />{" "}
          <span className="mr-2">09 - 28 - 2022</span>
        </span>
      ),
      description:
        "Developed a DeFi system to transfer ethers along with a message. The UI shows a GIF of the keyword used at the time of the transaction.",
      demoLink: "https://krypto-dapp.web.app/",
      lineStyle: lineStyle,
      codeLink: "https://github.com/joelpatel/eth-web3-defi",
    },
    {
      id: 5,
      title: "AWS Lambda DynamoDB REST APIs",
      dates: (
        <span className="inline-flex justify-start items-center">
          <span className="mr-2">05 - 2022</span>
          <BsArrowRight className="mr-2" color="textGray" size={10} />{" "}
          <span className="mr-2">05 - 2022</span>
        </span>
      ),
      description: (
        <>
          Built a serverless function to store and retrieve list of users from
          DynamoDB.
        </>
      ),
      lineStyle: lineStyle,
      codeLink:
        "https://github.com/joelpatel/go-serverless-aws-lambda-dynamodb",
    },
    {
      id: 6,
      title: "Bitcoin Blockchain Money Laundering Analysis",
      dates: (
        <span className="inline-flex justify-start items-center">
          <span className="mr-2">02 - 05 - 2022</span>
          <BsArrowRight className="mr-2" color="textGray" size={10} />{" "}
          <span className="mr-2">05 - 21 - 2022</span>
        </span>
      ),
      description: (
        <>
          Developed various software components to fetch Bitcoin transactions
          and perform Motif based analysis to identify fraudulent transactions
          like money laundering. We fetched <strong>1 million</strong>{" "}
          transactions and performed analysis. The milestone reached was to
          group various wallet addresses of users, ideally is NOT possible as
          Bitcoin does not show owners of wallets.
        </>
      ),
      lineStyle: lineStyle,
      codeLink:
        "https://github.com/orgs/UB-CSE-640-Blockchain-Analysis/repositories",
      docLink:
        "https://drive.google.com/drive/u/1/folders/1RANKMPalVbOk7pO7Z0BvdvBUlHbNmGhf",
    },
    {
      id: 7,
      title: "SQL Database Management System",
      dates: (
        <span className="inline-flex justify-start items-center">
          <span className="mr-2">02 - 01 - 2022</span>
          <BsArrowRight className="mr-2" color="textGray" size={10} />{" "}
          <span className="mr-2">05 - 15 - 2022</span>
        </span>
      ),
      description: (
        <>
          Designed and Developed a single-threaded database management system
          using C++11. Implemented B+Tree Indexes to increase the speed of
          fetching data from the database. <br />
          By far the <strong>hardest</strong> project.
        </>
      ),
      lineStyle: lineStyle,
    },
    {
      id: 8,
      title: "Image Stitching & Foreground Removal",
      dates: (
        <span className="inline-flex justify-start items-center">
          <span className="mr-2">04 - 05 - 2022</span>
          <BsArrowRight className="mr-2" color="textGray" size={10} />{" "}
          <span className="mr-2">04 - 15 - 2022</span>
        </span>
      ),
      description: (
        <>
          I wrote 2 python scripts, first to merge 2 images having a common
          background and remove the foreground noise. And second to perform
          image stitching on images having some overlapping features. I used
          SIFT to detect local features and implemented my homography algorithm
          without using any OpenCV functions. I applied blending to blend images
          seamlessly.
        </>
      ),
      lineStyle: lineStyle,
      codeLink:
        "https://github.com/joelpatel/computer-vision-background-stitching-image-panorama",
    },
    {
      id: 9,
      title: "Aarogya",
      dates: (
        <span className="inline-flex justify-start items-center">
          <span className="mr-2">09 - 01 - 2021</span>
          <BsArrowRight className="mr-2" color="textGray" size={10} />{" "}
          <span className="mr-2">12 - 25 - 2021</span>
        </span>
      ),
      description: (
        <>
          I built the Authentication, Routing, and Therapist Model parts of the
          frontend of a platform which combines multi-dimensional insights from
          sources such as people’s social media presence, psychological
          questionnaires, and therapist conversations to provide an effective
          detection and intervention solution for people with early signs of{" "}
          <strong>depression and suicidal thoughts</strong>.<br />
          Used React.js, react-router, Charts.js, and Bootstrap.
        </>
      ),
      lineStyle: lineStyle,
      codeLink: "https://github.com/CSE-510-Aarogya",
      docLink:
        "https://drive.google.com/file/d/1eRoD1NxIJ9lrnAxycgfR7Nu8-m0fHQO8/view",
    },
    {
      id: 10,
      title: "Kafka Pub-Sub Distributed System",
      dates: (
        <span className="inline-flex justify-start items-center">
          <span className="mr-2">11 - 10 - 2021</span>
          <BsArrowRight className="mr-2" color="textGray" size={10} />{" "}
          <span className="mr-2">11 - 17 - 2021</span>
        </span>
      ),
      description: (
        <>
          I developed a publisher-subscriber distributed system using{" "}
          <strong>Kafka</strong>. Multiple brokers, multiple partitions, and
          multiple topics. Used GraphQL for Authentication APIs, and REST &
          WebSocket APIs for data fetching. I also implemented a similar broker
          network from scratch without Kafka.
        </>
      ),
      lineStyle: lineStyle,
      codeLink: "https://github.com/joelpatel/Kafka-Distributed-Pub-Sub-System",
      docLink:
        "https://github.com/joelpatel/Kafka-Distributed-Pub-Sub-System/blob/master/Documentation/Documentation.pdf",
    },
    {
      id: 11,
      title: "Weather App",
      dates: (
        <span className="inline-flex justify-start items-center">
          <span className="mr-2">2020</span>
          <BsArrowRight className="mr-2" color="textGray" size={10} />{" "}
          <span className="mr-2">2020</span>
        </span>
      ),
      description: (
        <>
          Developed an iOS application to view weather data using OpenWeatherMap
          APIs.
        </>
      ),
      lineStyle: lineStyle,
      codeLink: "https://github.com/joelpatel/Weather-App",
    },
    {
      id: 12,
      title: "Bitcoin Price Tracker",
      dates: (
        <span className="inline-flex justify-start items-center">
          <span className="mr-2">2020</span>
          <BsArrowRight className="mr-2" color="textGray" size={10} />{" "}
          <span className="mr-2">2020</span>
        </span>
      ),
      description: (
        <>
          I built an iOS application to get Bitcoin prices in all major
          currencies.
        </>
      ),
      lineStyle: lineStyle,
      codeLink: "https://github.com/joelpatel/Bitcoin-Price-Tracker",
    },
    {
      id: 13,
      title: "Automatic Attendance System",
      dates: (
        <span className="inline-flex justify-start items-center">
          <span className="mr-2">12 - 2019</span>
          <BsArrowRight className="mr-2" color="textGray" size={10} />{" "}
          <span className="mr-2">05 - 2020</span>
        </span>
      ),
      description: (
        <>
          I was part of a team. We built an Automatic Attendance taking System
          using Computer Vision, viz. LBPH algorithm. I built the ML model which
          takes in images of students and trains to identify them using CCTV
          cameras, the admin's application which can be used to retrain the
          model plus do some operational tasks like approving attendance
          manually and so on.
        </>
      ),
      codeLink: "https://github.com/joelpatel/automatic-attendance-system",
    },
  ];

  return (
    <div
      name="portfolio"
      className="pt-20 bg-background w-full text-textColor min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-10/12 h-full">
        <div>
          <div className="pb-8">
            <p className="text-4xl font-medium inline border-b-4 border-textGray">
              Portfolio
            </p>
            <p className="pt-4">My projects timeline.</p>
          </div>

          <ul>
            {projects.map(
              ({
                id,
                title,
                dates,
                description,
                demoLink,
                codeLink,
                lineStyle,
                docLink,
              }) => {
                return (
                  <li
                    key={id}
                    className="relative flex items-baseline gap-6 pb-10"
                  >
                    <div className={lineStyle}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        className="bi bi-circle-fill fill-textGray"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm">
                        <span className="font-semibold text-4xl sm:text-2xl mr-4">
                          {title}
                        </span>{" "}
                        <span className="font-extralight">{dates}</span>
                      </p>
                      <p className="mt-2 text-sm">{description}</p>
                      <span className="mt-2 flex">
                        {demoLink && (
                          <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-fit px-6 py-1 my-2 mr-5 flex items-center rounded-md bg-background-dark text-textColor border-textColor border-2 cursor-pointer duration-200 hover:scale-105"
                          >
                            View
                          </a>
                        )}
                        {codeLink && (
                          <a
                            href={codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-fit px-6 py-1 my-2 mr-5 flex items-center rounded-md bg-background-dark text-textColor border-textColor border-2 cursor-pointer duration-200 hover:scale-105"
                          >
                            Code
                          </a>
                        )}
                        {docLink && (
                          <a
                            href={docLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-fit px-6 py-1 my-2 flex items-center rounded-md bg-background-dark text-textColor border-textColor border-2 cursor-pointer duration-200 hover:scale-105"
                          >
                            Documentation
                          </a>
                        )}
                      </span>
                    </div>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
