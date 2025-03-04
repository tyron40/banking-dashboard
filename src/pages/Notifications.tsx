import React from 'react';
import { Bell, Check, Trash2 } from 'lucide-react';
import { notifications } from '../data/mockData';

const Notifications: React.FC = () => {
  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
          <p className="text-gray-500">Stay updated with important account alerts and information.</p>
        </div>
        <div className="flex space-x-2">
          <button className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Check size={16} />
            <span>Mark All as Read</span>
          </button>
          <button className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Trash2 size={16} />
            <span>Clear All</span>
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Recent Notifications</h2>
        </div>
        
        {notifications.length === 0 ? (
          <div className="p-8 text-center">
            <div className="bg-indigo-100 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center mb-4">
              <Bell size={32} className="text-indigo-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications</h3>
            <p className="text-gray-500">You're all caught up! Check back later for updates.</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-6 hover:bg-gray-50 transition-colors ${
                  !notification.read ? 'bg-indigo-50' : ''
                }`}
              >
                <div className="flex items-start">
                  <div className={`p-2 rounded-full mr-4 ${
                    notification.type === 'alert' ? 'bg-red-100' : 
                    notification.type === 'success' ? 'bg-green-100' : 'bg-blue-100'
                  }`}>
                    <Bell size={20} className={`${
                      notification.type === 'alert' ? 'text-red-600' : 
                      notification.type === 'success' ? 'text-green-600' : 'text-blue-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                        <p className="text-gray-600 mt-1">{notification.message}</p>
                      </div>
                      <span className="text-sm text-gray-500">
                        {new Date(notification.date).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-end mt-4 space-x-2">
                      {!notification.read && (
                        <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                          Mark as Read
                        </button>
                      )}
                      <button className="text-sm text-gray-500 hover:text-gray-700 font-medium">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;