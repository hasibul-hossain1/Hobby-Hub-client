import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto" />
        <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          Your adventure is about to begin
        </p>
      </div>
    </div>
  );
};

export default Loading;
