import React, { useState } from "react";
import { FaSearch, FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbottom from "./navbottom";

function Home() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [respo, setRespo] = useState("");

  const handleSpeechRecognition = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const { transcript } = event.results[event.results.length - 1][0];
      setTranscript(transcript);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    if (isListening) {
      recognition.stop();
    } else {
      recognition.start();
    }
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    const res = {
      speech_data: {
        speech_text:
          "hi from speak more clearly. can I ask you something. are you unhappy with your accent in English. do you feel frustrated because your English speeches on clear and people can't understand what you are saying. special on the phone. are you missing out on opportunities to build better relationships at work. OT film parrot sketch speak English. are you having trouble finding work in. feel your being charged. and treated as less than equal. because of your English accent. if you answered yes to any of these questions. you are in the right place and this is the right time to change your life. in just 15 minutes a day we can help you master a British accent. if you are from a non English speaking background and you want to speak with a clear confident British accent. you are in the right place. our British online accent course. has been created by Astro bro. which is certified speech therapist without 30 years of experience helping people to pronounce English clearly. she is used for experience to create a step by step course to get you quick effective results. our scientific learning technique. uses real British English speakers. total auditory image. how British accent reduction course has been created in a specific order. to give you the most effective results. walking from simple searches how to pronounce English sounds and words. Tamil Complex such as video training for correct English stress and rhythm. to make your speech sound flowing. like a native English speak. the best part. the courses online. so there is no confusing Technology. simply login to any of your devices and get started. over 40000 people from all over the world have used our proven training. to change the pronunciation and improve their action. and you can do. are students tell us how happy I am that they finally found a solution to the English accent problems. they have achieved Rapid results without any 15 minutes practice today. adaptor earlier few weeks already say a big change in the English pronunciation. and you can do. of course the more you practice the quicker you get results. with daily practice and the right tools you can improve your speed. Angela. I know you're watching this because you want to change your life. shutdown wait any longer. black colour. get started now. ",
        corrected_speech:
          "Hi from speak more clearly.Can I ask you something?Are you unhappy with your accent in English?Do you feel frustrated because your English speeches are clear and people can't understand what you are saying?Special on the phone.Are you missing out on opportunities to build better relationships at work?OT film parrot sketch speak English.Are you having trouble finding work in your area?Feel your being charged with something.Treated as less than equal and treated as less than equal.Because of your English accent .If you answered yes to any of these questions, you answered yes.You are in the right place and this is the right time to change your life.In 15 minutes a day we can help you master a British accent.If you are from a non English speaking background and you want to speak with a clear confident British accent, you should do so with a clear English accent.You are in the right place.Our British online accent course is based on the English language.Has been created by Astro Bros.Which is a certified speech therapist without 30 years of experience helping people to pronounce English clearly.She is used for experience to create a step by step course to get you quick and effective results.Our scientific learning technique teaches us a lot about science .Uses real British English speakers.Total auditory image.How the British accent reduction course has been created in a specific order .To give you the most effective results possible.Walking from simple searches how to pronounce English sounds and words.Tamil Complex such as video training for correct English stress and rhythm .To make your speech sound like it is flowing .Like a native English speaker, a native speaker can speak English like a native speaker can.The best part is that it is the best part.The courses are available online.So there is no confusing Technology.Simply login to any of your devices and get started.Over 40000 people from all over the world have used our proven training .To change the pronunciation and improve their action .And you can do that.Are students telling us how happy I am that they finally found a solution to the English accent problems?They have achieved Rapid results without any 15 minutes practice today.Adaptors earlier few weeks already say a big change in the English pronunciation .And you can do that.Of course the more you practice the quicker you get results.With daily practice and the right tools you can improve your speed.Angela Angela Angela Angela Angela Angela Angela Angela Angela Angela Angela Angela Angela Angela Angela Angela Angela Angela Angela Angela Angela Angela Angela Angela AngelI know you're watching this because you want to change your life.Shutdown does not have to wait any longer.Black colour.Get started now!Then there is the question of whether or not there is a need for it.",
        error_tokens: [
          "hi",
          "clearly",
          "can",
          "something",
          "are",
          "English",
          "do",
          "on",
          "saying",
          "special",
          "phone",
          "are",
          "work",
          "English",
          "are",
          "feel",
          "and",
          "treated",
          "as",
          "less",
          "than",
          "equal",
          "because",
          "if",
          "questions",
          "you",
          "life",
          "in",
          "just",
          "15",
          "minutes",
          "a",
          "day",
          "we",
          "can",
          "help",
          "you",
          "master",
          "a",
          "British",
          "if",
          "accent",
          "you",
          "place",
          "our",
          "has",
          "bro",
          "which",
          "certified",
          "speech",
          "therapist",
          "without",
          "30",
          "years",
          "of",
          "experience",
          "helping",
          "people",
          "to",
          "pronounce",
          "English",
          "clearly",
          "she",
          "effective",
          "results",
          "our",
          "uses",
          "speakers",
          "total",
          "image",
          "how",
          "British",
          "accent",
          "reduction",
          "course",
          "has",
          "been",
          "created",
          "in",
          "a",
          "specific",
          "order",
          "to",
          "walking",
          "words",
          "to",
          "flowing",
          "like",
          "speak",
          "the",
          "the",
          "online",
          "so",
          "Technology",
          "simply",
          "started",
          "over",
          "to",
          "and",
          "are",
          "tell",
          "problems",
          "they",
          "today",
          "adaptor",
          "and",
          "of",
          "results",
          "with",
          "speed",
          "life",
          "shutdown",
          "wait",
          "any",
          "longer",
          "black",
          "colour",
          "get",
          "now",
        ],
        corrected_audio:
          "store/corrected/c9ddee79-f9fa-41d3-8df0-5094ea79063a.mp3",
      },
      filler_data: {
        post_filler_percentage: "18.26 %",
        filler_percentage: "2.41 %",
        repetitive_words: [
          {
            repetitive_word: "you",
            word_count: 8,
          },
          {
            repetitive_word: "to",
            word_count: 7,
          },
          {
            repetitive_word: "English",
            word_count: 6,
          },
          {
            repetitive_word: "the",
            word_count: 6,
          },
          {
            repetitive_word: "and",
            word_count: 5,
          },
          {
            repetitive_word: "your",
            word_count: 4,
          },
          {
            repetitive_word: "a",
            word_count: 4,
          },
          {
            repetitive_word: "is",
            word_count: 3,
          },
          {
            repetitive_word: "are",
            word_count: 3,
          },
          {
            repetitive_word: "with",
            word_count: 3,
          },
        ],
        repetitive_filler_words: [
          {
            repetitive_word: "so",
            word_count: 4,
          },
          {
            repetitive_word: "right",
            word_count: 2,
          },
        ],
      },
      emotion_data: {
        face_emotion: {
          happy: "96.88 %",
          neutral: "3.12 %",
        },
        text_emotion: {
          anger: "98.66 %",
          disgust: "0.04 %",
          fear: "0.1 %",
          joy: "0.25 %",
          neutral: "0.23 %",
          sadness: "0.59 %",
          surprise: "0.13 %",
        },
      },
      content_data: {
        introduction_score: "35.0528825598111 %",
        conclusion_score: "55.988605417529854 %",
        clearness_score: "average",
        relativity_score: "Related",
        scraped_data: [
          {
            title: "British Accent Online Course - speakmoreclearly.com",
            description:
              "When you listen to the audio and video lessons in the British accent online course you are training your ear to understand the sounds in British English. Once\u00a0...",
            DOI: "https://www.speakmoreclearly.com/british-accent-online-course/",
            image_url:
              "https://www.speakmoreclearly.com/wp-content/uploads/2022/11/american-accent-course-banner-image.png",
          },
          {
            title: "Online British English Pronunciation Course",
            description:
              "Aug 15, 2023 ... Luke's course is by far the best and most affordable way to improve your English accent. The course presents concise and easy-to-follow\u00a0...",
            DOI: "https://improveyouraccent.co.uk/course/",
            image_url:
              "https://improveyouraccent.co.uk/wp-content/uploads/2018/05/improve-your-accent-home-page-03-online-course-F6FBFA-background-AW.png",
          },
          {
            title: "Speak English With A British Accent",
            description:
              "Want To Speak English With A British Accent? Get the RP British Accent You've Always Wanted! Start Here. Copyright 2023 - Learning British Accent - Enjoy\u00a0...",
            DOI: "https://learningbritishaccent.com/",
            image_url:
              "https://learningbritishaccent.com/wp-content/uploads/2021/07/cropped-britaccent-logo.png.pagespeed.ce.O4t42vZP5W.png",
          },
          {
            title: "British Council: Learn English Online",
            description:
              "Learn English online using our high-quality resources to quickly improve your English. Take our free level test to help you find your English language level\u00a0...",
            DOI: "https://learnenglish.britishcouncil.org/",
            image_url:
              "https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/1280x500/public/2023-04/RS9260_GettyImages-1324510963_1440x960.jpg?itok=BRnKD4Xz",
          },
          {
            title: "Best Learning English Courses Online [2023] | Coursera",
            description:
              "Learn Learning English or improve your skills online today. Choose from a wide range of Learning English courses offered from top universities and industry\u00a0...",
            DOI: "https://www.coursera.org/browse/language-learning/learning-english",
            image_url:
              "https://s3.amazonaws.com/coursera/media/Grid_Coursera_Partners_updated.png",
          },
          {
            title: "British Accent Training | English Accent Training | LSW",
            description:
              "Accent Softening and Confident Speaking 10-week online course ... Led by our expert coaches, you will learn to perfect your English accent and become a confident,\u00a0...",
            DOI: "https://www.londonspeechworkshop.com/our-courses/mastering-the-british-accent/",
            image_url:
              "https://www.londonspeechworkshop.com/wp-content/uploads/2020/03/shutterstock_1019334223-scaled.jpg",
          },
          {
            title:
              "Best English Pronunciation Courses & Certifications [2023 ...",
            description:
              "Learn English Pronunciation or improve your skills online today. Choose from a wide range of English Pronunciation courses offered from top universities and\u00a0...",
            DOI: "https://www.coursera.org/courses?query=english%20pronunciation",
            image_url:
              "https://s3.amazonaws.com/coursera/media/Grid_Coursera_Partners_updated.png",
          },
          {
            title:
              "Free Course: British English Pronunciation from YouTube | Class ...",
            description:
              "In this course, you will learn how to pronounce different words, verbs, homophones, ... Pricing. Free Online Course. Languages. English. Duration & workload.",
            DOI: "https://www.classcentral.com/course/youtube-british-english-pronunciation-54573",
            image_url:
              "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/6110bff747f7.jpg",
          },
          {
            title: "Learn to Speak English with a Clear British Accent | Udemy",
            description:
              "Learn to Speak English with a Clear British Accent is designed to help you more easily identify the sounds made in an authentic English accent from Great\u00a0...",
            DOI: "https://www.udemy.com/course/british-accent/",
            image_url:
              "https://img-c.udemycdn.com/course/480x270/1950886_8907.jpg",
          },
          {
            title: "Voice & Accent Training - The London School of English",
            description:
              "English accent training teaches you new sounds and speech habits. A typical session involves work on: ... (*RP stands for 'Received Pronunciation'. It is the term\u00a0...",
            DOI: "https://www.londonschool.com/courses/business-and-professionals/voice-accent-training/",
            image_url:
              "https://www.londonschool.com/media/filer_public_thumbnails/filer_public/ce/13/ce13e55d-09c3-4b8e-9a29-b96ed47d0242/accent_training.png__1240x840_crop_subsampling-2_upscale.png",
          },
        ],
      },
    };
    localStorage.setItem("response", JSON.stringify(res));
    getResponseData();
  };
  const getResponseData = async () => {
    const resp = await JSON.parse(localStorage.getItem("response"));
    console.log("🚀 ~ file: home.jsx:338 ~ getResponseData ~ resp:", resp);
    setRespo(resp);
  };
  return (
    <div className="main-body h-full bg-white p-5 relative ">
      <div className="form-body w-full ">
        <div className="search p-3 w-[80%] right-0 mx-auto">
          <div className="flex w-1/6 items-center rounded-full shadow-md float-right bg-slate-100">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-4 outline-none rounded-l-full bg-slate-100"
            />
            <button className="bg-blue-500 text-white rounded-full p-2">
              <FaSearch />
            </button>
          </div>
        </div>

        <div className="mx-auto p-5 mt-2  flex w-[80%] justify-center flex-col">
          <div className="flex items-center bg-white rounded-lg border border-gray-300 w-[50%] mx-auto">
            {/* <input type='text'
                                value={transcript}
                                onChange={(e) => setTranscript(e.target.value)}
                                placeholder="Speak..."
                                className="w-full  px-4 outline-none rounded-l-lg "
                            />
                            <button
                                onClick={handleSpeechRecognition}
                                className="bg-blue-500 text-white rounded-r-lg p-2"
                            >
                                {isListening ? <FaMicrophoneSlash /> : <FaMicrophone />}
                            </button> */}

            <input type="text " placeholder="Speak.." className="p-2 w-full" />
          </div>
          <p className="text-center text-[12pt] mt-3">
            Upload your speach here
          </p>

          <div className="video-upload mt-4 text-center">
            <div className="flex items-center w-[50%] bg-white rounded-lg justify-between mx-auto border border-gray-300">
              <span className="mx-5 text-gray-400">
                {selectedFile ? selectedFile.name : "Choose Video File..."}
              </span>
              <input
                type="file"
                // accept="video/*"
                onChange={handleFileChange}
                className="hidden "
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg cursor-pointer "
              >
                Browse
              </label>
            </div>

            <p className="text-center mt-3">Converted to text</p>

            <div className="converted-area mt-5 w-full">
              <textarea
                value={respo?.speech_data?.speech_text}
                className="w-[80%] h-[200px] resize-none border border-gray-300 rounded-md p-3"
              />
            </div>
          </div>

          <button className="mt-3 bg-gradient-to-r from-sky-400 to-blue-500 p-1 w-[160px] pt-2 pb-2 rounded-full text-white mx-auto">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
