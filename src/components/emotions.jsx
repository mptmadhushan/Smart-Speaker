import React, { useEffect, useState } from "react";
import Linechartdummy from "../charts/linechart";
import { Link } from "react-router-dom";
import Navbottom from "./navbottom";

function Emotions() {
  const [respo, setRespo] = useState("");
  const [emotionArra, setEmotionArray] = useState("");

  useEffect(() => {
    getResponseData();
  }, []);
  const getResponseData = async () => {
    const resp = await JSON.parse(localStorage.getItem("response"));
    console.log("🚀 ~ file: home.jsx:338 ~ getResponseData ~ resp:", resp);
    setRespo(resp);
    const eArr = resp.emotion_data.text_emotion;
    const emotionArray = Object.keys(eArr).map((emotionName) => ({
      name: emotionName,
      uv: parseFloat(eArr[emotionName]),
    }));
    setEmotionArray(emotionArray);
  };
  const calculateScoreOutOf10 = (happyPercentage, neutralPercentage) => {
    // Convert percentages to numbers
    const happyPercentageValue = parseFloat(happyPercentage);
    const neutralPercentageValue = parseFloat(neutralPercentage);

    // Check if the input values are valid
    if (isNaN(happyPercentageValue) || isNaN(neutralPercentageValue)) {
      return "Invalid input percentages";
    }

    // Calculate the score out of 10
    const totalPercentage = happyPercentageValue + neutralPercentageValue;
    console.log(
      "🚀 ~ file: emotions.jsx:29 ~ calculateScoreOutOf10 ~ totalPercentage:",
      happyPercentageValue
    );
    const scoreOutOf10 = (totalPercentage / 100) * 10;

    return scoreOutOf10;
  };

  return (
    <div className="main-body h-full bg-white p-5 relative ">
      <div className="form-body w-full ">
        <div className="mx-auto p-5 mt-2  flex w-[80%] justify-center flex-col">
          <div className="panel-content w-[80%] flex flex-col mx-auto">
            <div className="panel p-3 ">
              <h2 className="font-semibold">Emotions through the Video</h2>

              <div className="panel-card w-full flex rounded-md justify-center items-center mt-5 bg-gradient-to-r from-sky-400 to-blue-500">
                <div className="score w-1/3 flex flex-col justify-center items-center text-white">
                  <h3 className="text-[14pt] font-semibold">SCORE</h3>
                  <div>
                    <span className="text-[32pt]">
                      {calculateScoreOutOf10(
                        respo?.emotion_data?.face_emotion.happy,
                        respo?.emotion_data?.face_emotion.neutral
                      )}
                    </span>
                  </div>
                </div>
                <div className="comment w-2/3 flex justify-center items-center">
                  <textarea
                    className="p-2 resize-none w-full h-[150px] border border-gray-300 rounded-md"
                    placeholder="Comment"
                  />
                </div>
              </div>
            </div>

            <div className="panel p-3 ">
              <h2 className="font-semibold">
                Emotions through the Voice Speech
              </h2>

              <div className="panel-card w-full flex flex-col rounded-md justify-center items-center mt-5 h-[250px] border border-gray-900 p-3">
                {emotionArra && <Linechartdummy data={emotionArra} />}
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
    </div>
  );
}

export default Emotions;
