import React, { useState } from "react";
import { Link } from "react-router-dom";

function FinalReport() {
  return (
    <div className="main-body h-full bg-white p-5 relative">
      <div className="form-body w-full">
        <div className="mx-auto p-5 mt-2 flex w-[80%] justify-center flex-col">
          <div className="panel-content w-[80%] flex flex-col mx-auto">
            <div className="flex flex-col mt-5 space-y-5">
              <div className="p-5 space-y-3 border border-gray-300 rounded-md justify-center items-center text-center">
                <h3 className="text-left font-semibold ">
                  This is auto generated details report, You can get idea about
                  your speech
                </h3>

                <div className="flex flex-col w-full">
                  <div className="table-body space-y-5 ">
                    <table className="w-full ">
                      <thead className="mb-3">
                        <th className="p-2 bg-purple-300 font-medium text-left">
                          Judgging Item
                        </th>
                        <th className="p-2 bg-purple-300 font-medium text-left">
                          Sub Judgging Item
                        </th>
                        <th className="p-2 bg-purple-300 font-medium text-left">
                          Score
                        </th>
                        <th className="p-2 bg-purple-300 font-medium text-left">
                          Comment
                        </th>
                      </thead>

                      <tbody className="w-full mt-3 text-white">
                        <tr className="w-full mt-3 border-b-2 border-sky-300">
                          <td className="row-span-5 text-left p-2 Judgging_Item bg-[#1f1c20]">
                            {" "}
                            Speech Development
                          </td>
                          <td className="text-left p-2 Sub_Judgging_Item bg-[#1f1c20]">
                            <tr>Clearence</tr>
                            <tr>Concluation</tr>
                            <tr>Introduction</tr>
                            <tr>Keyword Extraction</tr>
                            <tr>Synoyms</tr>
                          </td>
                          <td className="text-left p-2 Score bg-[#1f1c20]">
                            <tr>60%</tr>
                            <tr>60%</tr>
                            <tr>60%</tr>
                            <tr>60%</tr>
                            <tr>60%</tr>
                          </td>
                          <td className="text-left p-2 Comment bg-[#1f1c20]">
                            <tr>Good</tr>
                            <tr>Good</tr>
                            <tr>Good</tr>
                            <tr>Good</tr>
                            <tr>Good</tr>
                          </td>
                        </tr>

                        <tr className="w-full mt-3 border-b-2 border-sky-300">
                          <td className="row-span-2 text-left p-2 Judgging_Item bg-[#1f1c20]">
                            {" "}
                            Correctness
                          </td>
                          <td className="text-left p-2 Sub_Judgging_Item bg-[#1f1c20]">
                            <tr>Grammatical Accuarcy</tr>
                            <tr>Grammartical Richness</tr>
                          </td>
                          <td className="text-left p-2 Score bg-[#1f1c20]">
                            <tr>60%</tr>
                            <tr>60%</tr>
                          </td>
                          <td className="text-left p-2 Comment bg-[#1f1c20]">
                            <tr>Good</tr>
                            <tr>Good</tr>
                          </td>
                        </tr>

                        <tr className="w-full mt-3 border-b-2 border-sky-300">
                          <td className="text-left p-2 Judgging_Item bg-[#1f1c20]">
                            {" "}
                            Physical
                          </td>
                          <td className="text-left p-2 Sub_Judgging_Item bg-[#1f1c20]">
                            <tr>Correct Usage Of Expressions</tr>
                          </td>
                          <td className="text-left p-2 Score bg-[#1f1c20]">
                            <tr>60%</tr>
                          </td>
                          <td className="text-left p-2 Comment bg-[#1f1c20]">
                            <tr>Good</tr>
                          </td>
                        </tr>


                        <tr className="w-full mt-3 border-b-2 border-sky-300">
                          <td className="row-span-3 text-left p-2 Judgging_Item bg-[#1f1c20]">
                            {" "}
                            Voice
                          </td>
                          <td className="text-left p-2 Sub_Judgging_Item bg-[#1f1c20]">
                            <tr>Silence</tr>
                            <tr>Filler Words</tr>
                            <tr>Repeated Words</tr>
                          </td>
                          <td className="text-left p-2 Score bg-[#1f1c20]">
                            <tr>60%</tr>
                            <tr>60%</tr>
                            <tr>60%</tr>
                          </td>
                          <td className="text-left p-2 Comment bg-[#1f1c20]">
                            <tr>Good</tr>
                            <tr>Good</tr>
                            <tr>Good</tr>
                          </td>
                        </tr>
                        
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinalReport;
