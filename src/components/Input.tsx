import React, { useId } from "react";

type props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label?: string };
export default function Input(props: props) {
  const id = useId();
  return (
    <div className="">
      <label
        htmlFor={id}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {props.label}
      </label>
      <input
        {...props}
        id={id}
        className={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ".concat(
          props.className ?? ""
        )}
      />
    </div>
  );
}
