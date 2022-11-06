const ContactMe = () => {
  return (
    <div
      name="contact"
      className="pt-20 w-full md:min-h-screen bg-background text-textColor"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-10/12 h-full">
        <div className="pb-8">
          <p className="text-4xl font-medium inline border-b-4 border-textGray">
            Contact Me
          </p>
        </div>
        <div>
          <form
            action="https://getform.io/f/1c423b10-9dfb-40ab-a6d1-ead536d4f716"
            method="POST"
            className="flex flex-col w-full lg:w-6/10"
          >
            <input
              type="text"
              name="name"
              placeholder="Please enter your name here."
              className="mb-4 p-2 bg-transparent border-2 rounded-md text-textColor focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Please enter your email here."
              className="mb-4 p-2 bg-transparent border-2 rounded-md text-textColor focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              className="mb-4 p-2 bg-transparent border-2 rounded-md text-textColor focus:outline-none"
            ></textarea>
            <button className="text-black w-fit px-6 py-3 mb-4 flex items-center rounded-md bg-gradient-to-r from-textColor via-[#cacaca] to-[#2f2f2f] cursor-pointer duration-200 hover:scale-105">
              Contact Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
