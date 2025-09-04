import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full p-6">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2  border-white"></div>
      <span className="ml-3  text-white font-medium">Loading...</span>
    </div>
  );
};

export default Loading;