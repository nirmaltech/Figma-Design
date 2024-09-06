import { useState } from 'react';

const Tab = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="bg-gray-800  rounded-lg w-1/2  p-5 text-white ml-auto mt-8">
      {/* Tab Buttons */}
      <div className="w-1/2 bg-gray-100 "></div>

      <div className="flex justify-center bg-black rounded-lg space-x-4 mb-4">
        <button
          className={`py-2 mr-80 bg-gray-900 px-4 rounded-lg ${
            activeTab === 'about' ? 'bg-gray-700' : 'bg-gray-600'
          }`}
          onClick={() => setActiveTab('about')}
        >
          About Me
        </button>
        <button
          className={`py-2 px-4 rounded-lg ${
            activeTab === 'experiences' ? 'bg-gray-700' :''
          }`}
          onClick={() => setActiveTab('experiences')}
        >
          Experiences
        </button>
        <button
          className={`py-2 px-4 rounded-lg ${
            activeTab === 'recommended' ? 'bg-gray-700' : ''
          }`}
          onClick={() => setActiveTab('recommended')}
        >
          Recommended
        </button>
      </div>

      {/* Tab Content - Scrollable */}
      <div className="overflow-y-auto h-[180px]">
        {activeTab === 'about' && (
          <div>
            <p>Hello! I am Nirmal, And I am frontend Developer and I skilled in react.</p>
            <p>
              I was born and raised in India, NY, and have been living in Noida
              India for the past 10 years with my Goal and and Living
              I learn the full stack Developer
            </p>
          </div>
        )}
        {activeTab === 'experiences' && (
          <div>
            <p>Experience in work on various projects. Add details about your experiences.</p>
          </div>
        )}
        {activeTab === 'recommended' && (
          <div>
            <p>Recommended content goes here. Suggestions and recommendations.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tab;