import React, { useState } from 'react';
import Post from './Posts';
import './index.css';

const App = () => {
  const [postId, setPostId] = useState(1);

  const incrementPostId = () => {
    setPostId(prevPostId => prevPostId + 1);
  };

  const decrementPostId = () => {
    setPostId(prevPostId => (prevPostId > 1 ? prevPostId - 1 : 1));
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 text-white">
      <div className="max-w-lg w-full text-white">
        <Post postId={postId} />
        <div className="flex justify-center mt-4 space-x-4">
          <button onClick={decrementPostId} className="bg-green-500 text-white px-4 py-5 rounded-full shadow hover:bg-green-600">
            Indietro
          </button>
          <button onClick={incrementPostId} className="bg-green-500 text-white px-4 py-5 rounded-full shadow hover:bg-green-600">
            Avanti
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
