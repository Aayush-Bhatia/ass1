
import React from 'react';

// Props seedha destructure kar lo
function Sidebar({ activeView, setActiveView }) {
  
  // Active button ke liye CSS (example)
  const baseStyle = "w-full text-left p-3 rounded hover:bg-gray-300";
  const activeStyle = "bg-blue-500 text-white";

  return (
    // Sidebar - fix width, bg-white, border
    <aside className="w-64 bg-white p-4 border-r border-gray-300">
      <nav>
        <ul>
          <li>
            <button
              // Check karo ki active hai ya nahi
              className={`${baseStyle} ${activeView === 'create' ? activeStyle : ''}`}
              onClick={() => setActiveView('create')}
            >
              Create Feedback
            </button>
          </li>
          <li className="mt-2">
            <button
              className={`${baseStyle} ${activeView === 'view' ? activeStyle : ''}`}
              onClick={() => setActiveView('view')}
            >
              View Feedback
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;