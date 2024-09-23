import React, { useState } from "react";

export default function Input({ type, children, ...props }) {
  return (
    <>
      <input
        type="text"
        placeholder={props.placeholder}
        className="border-[1px] border-gray-300 px-5 py-2 rounded-lg focus:w-[500px] transition-all w-[300px] text-[1.6rem] focus:text-red-600 outline-none focus:border-gray-400"
        onChange={props.onChange}
        {...props}
      />
    </>
  );
}
