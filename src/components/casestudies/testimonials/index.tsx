import React from "react";

export default function Testimonial() {
  return(
    <div className='w-screen h-screen grid'>
      <div className="grid grid-rows-6">
        <div className='grid grid-rows-3 text-3xl font-bold px-6'>
          <h1 className="row-start-2 row-span-2">Testimonials</h1>
        </div>
        <div className="row-span-5 bg-lighter-grey">
          text in here
        </div>
      </div>
    </div>
  );
}