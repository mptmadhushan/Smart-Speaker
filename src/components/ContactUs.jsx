import React, { useState } from "react";
import { Link } from "react-router-dom";

function ContactUs() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <div className="main-body h-full bg-white p-5 relative">
      <div className="form-body w-full">
        <div className="mx-auto p-5 mt-2 flex w-[80%] justify-center flex-col">
          <div className="panel-content w-[80%] flex flex-col mx-auto">
            <div className="flex flex-col mt-5 space-y-5">


              <div className="p-5 space-y-3 border border-gray-300 rounded-md justify-center items-center text-center">
                <h3 className="text-center font-semibold text-[28pt]">
                  Contact Us
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col w-full">
                    <div className="form-body space-y-5">
                      <input
                        type="text"
                        className="w-full bg-transparent border border-gray-300 rounded p-2"
                        value={fullName}
                        placeholder="Full Name"
                        onChange={handleFullNameChange}
                      />
                      <input
                        type="text"
                        className="w-full bg-transparent border border-gray-300 rounded p-2"
                        value={email}
                        placeholder="Email"
                        onChange={handleEmailChange}
                      />
                      <textarea
                        className="w-full bg-transparent border border-gray-300 rounded p-2 resize-none"
                        value={message}
                        placeholder="Message"
                        onChange={handleMessageChange}
                      />
                      <button
                        type="submit"
                        className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full bg-gradient-to-r from-sky-400 to-blue-500 z-10"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>

                <div className="contact-details ">
                    <h3 className="font-semibold">Contact</h3>
                    <ul>
                        <li>smartspeaker@gmail.com</li>
                        <li>011-28899635</li>
                    </ul>

                    <h3 className="font-semibold">Based in</h3>
                    <ul>
                        <li>Colombo, Sri Lanka</li>
                       
                    </ul>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
