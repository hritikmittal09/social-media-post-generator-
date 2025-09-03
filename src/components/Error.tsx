import React from "react";

interface ErrorProps {
  message?: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div className="flex justify-center items-center h-full p-6 bg-red-50 rounded-lg border border-red-200">
      <span className="text-red-600 font-semibold">
        {message || "Something went wrong. Please try again."}
      </span>
    </div>
  );
};

export default Error;
