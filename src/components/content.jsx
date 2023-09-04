import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

function Content() {
  const [respo, setRespo] = useState("");
  useEffect(() => {
    getResponseData();
  }, []);
  const getResponseData = async () => {
    const resp = await JSON.parse(localStorage.getItem("response"));
    console.log("🚀 ~ file: home.jsx:338 ~ getResponseData ~ resp:", resp);
    setRespo(resp);
  };
  const ScrapedItem = ({ title, description, DOI, image_url }) => {
    return (
      <div className="scraped-item">
        <img src={image_url} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={DOI} target="_blank" rel="noopener noreferrer">
          Learn more
        </a>
      </div>
    );
  };
  return (
    <div className="main-body h-full bg-white p-5 relative ">
      <div className="form-body w-full ">
        <div className="mx-auto p-5 mt-2  flex w-[80%] justify-center flex-col">
          <div className="panel-content w-[80%] flex flex-col mx-auto">
            <h2 className="font-semibold">
              Identify Introduction / Content / Conclusion
            </h2>

            {respo && (
              <div className="flex flex-col space-y-5 mt-3">
                <div className="p-4 flex justify-center items-center border border-gray-300 rounded-md w-full">
                  <textarea
                    className="p-5 w-full bg-white resize-none"
                    value={`Introduction - ${respo?.content_data.introduction_score}`}
                    placeholder="Introduction"
                    disabled
                  />
                </div>
                <div className="p-4 flex justify-center items-center border border-gray-300 rounded-md w-full">
                  <textarea
                    className="p-5 w-full bg-white resize-none"
                    value={`Content - ${respo?.content_data.introduction_score}`}
                    placeholder="Content"
                    disabled
                  />
                </div>
                <div className="p-4 flex justify-center items-center border border-gray-300 rounded-md w-full">
                  <textarea
                    className="p-5 w-full bg-white resize-none"
                    value={`Conclusion - ${respo?.content_data.clearness_score}`}
                    placeholder="Conclusion"
                    disabled
                  />
                </div>
              </div>
            )}

            {respo && (
              <div className="flex flex-row w-full mt-5 space-x-5 justify-between">
                <div className="p-5 space-y-3 border border-gray-300 rounded-md justify-center items-center text-center w-1/2">
                  <span>
                    Speech Relativity {`-${respo.content_data.clearness_score}`}
                  </span>
                </div>

                <div className="p-5 space-y-3 border border-gray-300 rounded-md justify-center items-center text-center w-1/2">
                  <span>
                    Speech Clearence {`-${respo.content_data.clearness_score}`}
                  </span>
                </div>
              </div>
            )}

            <div className="flex flex-col mt-5 space-y-5">
              <div className="p-5 space-y-3 border border-gray-300 rounded-md justify-center items-center text-center">
                {respo?.content_data?.scraped_data.map((item, index) => (
                  <ScrapedItem key={index} {...item} />
                ))}
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

export default Content;
