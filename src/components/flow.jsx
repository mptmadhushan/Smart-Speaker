import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

function Flow() {
  const [respo, setRespo] = useState("");
  const [emotionArra, setEmotionArray] = useState("");

  useEffect(() => {
    getResponseData();
  }, []);
  const getResponseData = async () => {
    const resp = await JSON.parse(localStorage.getItem("response"));
    console.log("🚀 ~ file: home.jsx:338 ~ getResponseData ~ resp:", resp);
    setRespo(resp);
  };
  const RepetitiveWordItem = ({ repetitive_word, word_count }) => {
    return (
      <div className="repetitive-word-item">
        <p>Word: {repetitive_word}</p>
        <p>Count: {word_count}</p>
      </div>
    );
  };
  return (
    <div className="main-body h-full bg-white p-5 relative ">
      <div className="form-body w-full ">
        {respo && (
          <div className="mx-auto p-5 mt-2  flex w-[80%] justify-center flex-col">
            <div className="panel-content w-[80%] flex flex-col mx-auto">
              <div className="flex flex-col mt-5 space-y-5">
                <div className="p-5 space-y-3 border border-gray-300 rounded-md justify-center items-center text-center">
                  {respo.filler_data.repetitive_words.map((item, index) => (
                    <RepetitiveWordItem key={index} {...item} />
                  ))}
                </div>

                <div className="p-5 space-y-3 border border-gray-300 rounded-md justify-center items-center text-center">
                  <textarea
                    className="p-5 w-full bg-white resize-none"
                    value={
                      "Filter Words in your Speech" -
                      `${respo.filler_data.filler_percentage}`
                    }
                    placeholder="Filter Words in your Speech"
                    disabled
                  />
                </div>

                <div className="p-5 space-y-3 border border-gray-300 rounded-md justify-center items-center text-center">
                  <textarea
                    className="p-5 w-full bg-white resize-none"
                    value="Silence Count"
                    placeholder="Silence Count"
                    disabled
                  />
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
        )}
      </div>
    </div>
  );
}

export default Flow;
