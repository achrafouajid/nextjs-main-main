import React from "react";
import { FaUser } from "react-icons/fa";

export default function layout({ children }: { children: any }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-200 to-green-500">
      <div className="w-full max-w-xs">
        <div className="mb-4 flex items-center justify-center">
          <div className="bg-blue-500 rounded-full p-3">
            <FaUser size={24} color="black" />
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
