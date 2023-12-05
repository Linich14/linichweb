import React from "react";
import Lilith from "../assets/lilithv2.png";

export default function Subcuerpo() {
  return (
    <div className="p-10 py-4 bg-[#FFE898] bg-opacity-50 mb-12">
      <div className="text-white text-xl border-solid border rounded-lg bg-black bg-opacity-50 text-center p-10 py-6 mb-10">
        <h1 className="text-xl">Algunas de mis Herramientas favoritas y Generaciones IA</h1>
      </div>
      <div className="border-solid border rounded-lg bg-black bg-opacity-50 p-10 flex justify-center gap-20 grid-cols-3">
        <div className="border-solid border rounded-lg bg-gradient-to-t from-pink-300 via-pink-500 to-pink-600">
          <img src={Lilith} alt="?" className="lilita p-4 "></img>
        </div>
        <div className="border-solid border rounded-lg bg-gradient-to-t from-pink-300 via-pink-500 to-pink-600">
          <img src={Lilith} alt="?" className="lilita p-4 "></img>
        </div>
        <div className="border-solid border rounded-lg bg-gradient-to-t from-pink-300 via-pink-500 to-pink-600">
          <img src={Lilith} alt="?" className="lilita p-4 "></img>
        </div>
      </div>
    </div>
  );
}
