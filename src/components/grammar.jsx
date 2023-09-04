import React from "react";
import { Link } from "react-router-dom";

function Grammar() {
  return (
    <div className="main-body h-full bg-white p-5 relative ">
      <div className="form-body w-full ">
        <div className="mx-auto p-5 mt-2  flex w-[80%] justify-center flex-col">
          <div className="panel-content w-[80%] flex flex-col mx-auto">
            <div className="flex flex-col mt-5 space-y-5">
              <div className="p-5 space-y-3 border border-gray-300 rounded-md justify-center items-center text-center bg-purple-300">
                <span>Grammaticle Richness</span>
              </div>

              <div className="p-5 space-y-3 border border-gray-300 rounded-md justify-center items-center text-center ">
                <h3 className="text-left font-semibold">Grammar Correction </h3>
                <div className="p-3 text-center border border-gray-300 rounded-sm">
                  <textarea
                    className="p-5 w-full bg-white resize-none"
                    value="Correction"
                    placeholder="Correction"
                    disabled
                  />
                </div>

                <div className="p-3 text-center border border-gray-300 rounded-sm">
                  <textarea
                    className="p-5 w-full bg-white resize-none"
                    value="Action"
                    placeholder="Action"
                    disabled
                  />
                </div>

                <div className="p-3 text-center border border-gray-300 rounded-sm">
                  <textarea
                    className="p-5 w-full bg-white resize-none"
                    value="Mistake"
                    placeholder="Mistake"
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className="btn-panel flex flex-row w-full justify-end space-x-6 mt-5">
              <button className="p-2 bg-purple-300 w-[140px] rounded-full">
                Close
              </button>
              <button className="p-2 bg-sky-300 w-[140px] rounded-full">
                Ok, Got it!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grammar;
