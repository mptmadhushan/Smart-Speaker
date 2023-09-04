import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="main-body h-full bg-white p-5 relative ">
      <div className="form-body w-full ">
        <div className="mx-auto p-5 mt-2  flex w-[80%] justify-center flex-col">
          <div className="panel-content w-[80%] flex flex-col mx-auto">
            <div className="flex flex-col mt-5 space-y-5">
             

              <div className="p-5 space-y-3 border border-gray-300 rounded-md justify-center items-center text-center ">
                <h3 className="text-center font-semibold text-[28pt]">Smart Speaker System</h3>
                <div className="p-3 text-center  rounded-sm">
                 <p className="text-[18pt]">
                 SMART SPEAKER is designed for users to practice and improve their public 
                 speaking skills. It is user-friendly and simple, an easy and efficient 
                 solution for users who want to improve their English speaking skills, 
                 gain confidence and deliver well-articulated speeches. Our solutions evaluate 
                 the user's English speech based on various aspects such as content analysis, 
                 flow completeness analysis, grammar analysis, and facial expression analysis.
                 </p>
                </div>

               

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
