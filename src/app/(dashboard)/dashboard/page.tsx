"use client";
import React from "react";
import Graph from "@/components/Graph";

export default function page() {
  return (
    <>
      <div className="flex gap-4 w-full">
        <div className="flex-grow bg-white rounded-lg shadow-md p-4">
          <h4 className="text-lg font-semibold mb-4">Container 1</h4>
          <div className="flex-grow">
            {typeof window !== "undefined" && <Graph />}
          </div>
        </div>

        <div className="flex-grow bg-white rounded-lg shadow-md p-4">
          <h4 className="text-lg font-semibold mb-4">Container 2</h4>
          <div className="flex-grow">
            {typeof window !== "undefined" && <Graph />}
          </div>
        </div>
      </div>
    </>
  );
}
