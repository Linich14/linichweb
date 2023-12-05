import React from "react";

export default function Carrusel() {
  return (
    <div className="justify-center p-10 py-4 flex gap-6 grid-cols-2 bg-[#FF87B2] bg-opacity-50">
      <div className="p-10 border-solid border rounded-lg bg-black bg-opacity-70 w-1/6">
        <p className="text-white text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt porro
          voluptate, quam minima dolorum consequatur quidem, recusandae
          repellendus dolor expedita vero veritatis! Minima nulla error atque,
          esse odio rerum. Quas.
        </p>
      </div>
      <div className="p-10 border-solid border rounded-lg bg-black bg-opacity-70 w-5/6">
        <p className="text-white text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam debitis
          eligendi numquam quod culpa error, consequuntur veniam perferendis!
          Dolores sed natus voluptatum nihil ea necessitatibus nisi pariatur
          aperiam temporibus corporis?
        </p>
      </div>
    </div>
  );
}
