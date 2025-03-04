import React, { useState } from 'react';
import { Bell, Search, User } from 'lucide-react';
import { currentUser, notifications } from '../../data/mockData';

const Header: React.FC = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  
  const unreadNotifications = notifications.filter(notif => !notif.read);

  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
      <div className="flex-1">
        <div className="relative max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowProfile(false);
            }}
            className="p-2 rounded-full hover:bg-gray-100 relative"
          >
            <Bell size={20} className="text-gray-600" />
            {unreadNotifications.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {unreadNotifications.length}
              </span>
            )}
          </button>
          
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
              <div className="p-3 border-b border-gray-200">
                <h3 className="font-semibold">Notifications</h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.length === 0 ? (
                  <p className="p-4 text-center text-gray-500">No notifications</p>
                ) : (
                  notifications.slice(0, 5).map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-3 border-b border-gray-100 hover:bg-gray-50 ${
                        !notification.read ? 'bg-indigo-50' : ''
                      }`}
                    >
                      <div className="flex items-start">
                        <div className={`h-2 w-2 mt-1.5 rounded-full mr-2 ${
                          notification.type === 'alert' ? 'bg-red-500' : 
                          notification.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
                        }`}></div>
                        <div>
                          <p className="font-medium text-sm">{notification.title}</p>
                          <p className="text-xs text-gray-500 mt-1">{notification.message}</p>
                          <p className="text-xs text-gray-400 mt-1">
                            {new Date(notification.date).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="p-2 border-t border-gray-200">
                <button className="w-full text-center text-sm text-indigo-600 hover:text-indigo-800 p-1">
                  View all notifications
                </button>
              </div>
            </div>
          )}
        </div>
        
        <div className="relative">
          <button
            onClick={() => {
              setShowProfile(!showProfile);
              setShowNotifications(false);
            }}
            className="flex items-center space-x-2"
          >
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="h-8 w-8 rounded-full object-cover border border-gray-300"
            />
            <span className="font-medium text-gray-700">{currentUser.name}</span>
          </button>
          
          {showProfile && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
              <div className="p-3 border-b border-gray-200">
                <p className="font-medium">{currentUser.name}</p>
                <p className="text-sm text-gray-500">{currentUser.email}</p>
              </div>
              <div>
                <a href="#" className="block p-3 text-sm hover:bg-gray-50">Profile</a>
                <a href="#" className="block p-3 text-sm hover:bg-gray-50">Account Settings</a>
                <a href="#" className="block p-3 text-sm hover:bg-gray-50">Security</a>
                <a href="#" className="block p-3 text-sm border-t border-gray-100 hover:bg-gray-50 text-red-500">Logout</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;