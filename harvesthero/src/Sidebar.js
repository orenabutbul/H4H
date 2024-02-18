import React from 'react';

function Sidebar({ userProfile }) {
  // Check if userProfile exists before accessing its properties
  if (!userProfile) {
    return (
      <div className="flex flex-col w-64 bg-gray-200 h-full justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-64 bg-gray-200 h-full">
      {/* User Profile Section */}
      <div className="flex items-center p-4 border-b border-gray-300">
        {/* Profile Photo */}
        {userProfile.photoURL && (
          <img src={userProfile.photoURL} alt="Profile" className="w-12 h-12 rounded-full mr-4" />
        )}
        {/* User Name */}
        <div>
          <div className="font-semibold">{userProfile.displayName}</div>
          <div className="text-gray-500">{userProfile.email}</div>
        </div>
      </div>

      {/* Other Sidebar Content */}
      {/* Add other sidebar content here */}
    </div>
  );
}

export default Sidebar;