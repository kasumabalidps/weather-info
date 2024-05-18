// components/Loading.tsx
import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
      <div className="flex space-x-2">
        <div className="w-5 h-5 bg-black rounded-full animate-bounce"></div>
        <div className="w-5 h-5 bg-black rounded-full animate-bounce animate-delay-200"></div>
        <div className="w-5 h-5 bg-black rounded-full animate-bounce animate-delay-400"></div>
      </div>
    </div>
  );
};

export default Loading;
