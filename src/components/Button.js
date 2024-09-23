import React from "react";

export default function Button({ children, ...props }) {
  return (
    <button
      type={props.type}
      className="bg-gray-200 rounded-lg px-5 font-semibold text-red-400 text-[1.4rem]"
      {...props}
    >
      {children}
    </button>
  );
}
