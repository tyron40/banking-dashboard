import React from 'react';
import { User, Bell, Shield, CreditCard, HelpCircle } from 'lucide-react';
import { currentUser } from '../data/mockData';

const Settings: React.FC = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500">Manage your account preferences and settings.</p>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Profile Information</h2>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="h-20 w-20 rounded-full object-cover border border-gray-300"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{currentUser.name}</h3>
              <p className="text-gray-500">{currentUser.email}</p>
              <button className="mt-2 text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                Change Profile Picture
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                defaultValue={currentUser.name}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                defaultValue={currentUser.email}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                defaultValue="+1 (555) 123-4567"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                defaultValue="123 Main St, Anytown, USA"
              />
            </div>
          </div>
          
          <div className="mt-6">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex items-center space-x-3">
            <Bell size={20} className="text-indigo-600" />
            <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Email Notifications</p>
                  <p className="text-sm text-gray-500">Receive emails for important alerts</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">SMS Alerts</p>
                  <p className="text-sm text-gray-500">Receive text messages for critical updates</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Push Notifications</p>
                  <p className="text-sm text-gray-500">Receive notifications in the app</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex items-center space-x-3">
            <Shield size={20} className="text-indigo-600" />
            <h2 className="text-lg font-semibold text-gray-900">Security</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-900 mb-1">Change Password</p>
                <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                  Update Password
                </button>
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-1">Two-Factor Authentication</p>
                <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                  Enable 2FA
                </button>
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-1">Login History</p>
                <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                  View Activity
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex items-center space-x-3">
            <CreditCard size={20} className="text-indigo-600" />
            <h2 className="text-lg font-semibold text-gray-900">Preferences</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-1">
                  Currency
                </label>
                <select
                  id="currency"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  defaultValue="USD"
                >
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - British Pound</option>
                  <option value="CAD">CAD - Canadian Dollar</option>
                </select>
              </div>
              <div>
                <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
                  Language
                </label>
                <select
                  id="language"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  defaultValue="en"
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Dark Mode</p>
                  <p className="text-sm text-gray-500">Use dark theme</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex items-center space-x-3">
          <HelpCircle size={20} className="text-indigo-600" />
          <h2 className="text-lg font-semibold text-gray-900">Help & Support</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Contact Support</h3>
              <p className="text-sm text-gray-600 mb-3">
                Need help with your account? Our support team is available 24/7.
              </p>
              <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                Contact Us
              </button>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">FAQs</h3>
              <p className="text-sm text-gray-600 mb-3">
                Find answers to commonly asked questions about our services.
              </p>
              <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                View FAQs
              </button>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">User Guides</h3>
              <p className="text-sm text-gray-600 mb-3">
                Learn how to use all the features of our banking platform.
              </p>
              <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                View Guides
              </button>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Security Tips</h3>
              <p className="text-sm text-gray-600 mb-3">
                Learn how to keep your account secure and protect your information.
              </p>
              <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                View Tips
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;