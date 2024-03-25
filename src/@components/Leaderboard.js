import React from "react";

export default function Leaderboard() {
    let leaderboards = [{email: "empty",score:"empty"}];
    if(localStorage.getItem("leaderboards")!==null)
        leaderboards = JSON.parse(localStorage.getItem("leaderboards"));
  return (
    <>
      <div class="relative overflow-hidden shadow-md rounded-lg max-w-screen-sm mx-12 my-6 border">
        <table class="w-full text-sm text-left rtl:text-right text-gray-400 scrollbar-hidden">
          <thead class="text-xs text-gray-400 uppercase bg-gray-700 ">
            <tr>
              <th scope="col" class="px-6 py-3">
                Participant
              </th>
              <th scope="col" class="px-6 py-3">
                Score
              </th>
            </tr>
          </thead>
          <tbody>
          {leaderboards.map((participant,i)=>(
            <tr class="bg-white border-b" key={i}>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                {participant.email}
              </th>
              <td class="px-6 py-4">{participant.score}</td>
            </tr>
          ))}
          
            
          </tbody>
        </table>
      </div>
    </>
  );
}
