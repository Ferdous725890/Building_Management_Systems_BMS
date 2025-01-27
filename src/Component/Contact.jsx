import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>BMS || Signup</title>
      </Helmet>

      <div className="pt-20 text-white">
        <div className="  rounded-lg text-white p-8 pb-10  pt-5 min-h-[calc(100vh-10rem)] ">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Section: Feedback Form */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
              <p className="mb-6 text-white">
                Please use the feedback form to get in touch with us if you have
                any inquiries or request. Within a few hours, the administrator
                will respond to your inquiry.
              </p>
              <form
                action="https://formspree.io/f/xgvvrlpe"
                method="POST"
                className="space-y-4"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Name..."
                    className="w-full p-2 rounded-md  bg-gray-800 border border-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Email..."
                    className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message*
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Write Here..."
                    className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Section: Information */}
            <div>
              <h3 className="text-xl font-bold mb-4">Information</h3>
              <p className="text-white mb-6">
                We are always eager to hear from you and assist with any
                inquiries or concerns you may have. Please feel free to reach
                out to us through any of the following means:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="bg-blue-500 p-2 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6h16.5M4.5 6v12M19.5 6v12M3.75 18h16.5"
                      />
                    </svg>
                  </span>
                  <p>(123) 123-456</p>
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-500 p-2 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2 11a7 7"
                      />
                    </svg>
                  </span>
                  <p>08 W 36th St, New York, NY 10001</p>
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-500 p-2 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 6h15M4.5 18h15M4.5 6v12M19.5 6v12"
                      />
                    </svg>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <footer></footer>
      </div>
    </>
  );
};

export default Contact;
