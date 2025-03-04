import React from 'react';
import SpendingByCategory from '../components/Analytics/SpendingByCategory';
import BalanceHistory from '../components/Analytics/BalanceHistory';
import { Calendar, Download } from 'lucide-react';

const Analytics: React.FC = () => {
  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-500">Insights into your financial activity.</p>
        </div>
        <div className="flex space-x-3">
          <div className="relative">
            <button className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Calendar size={16} />
              <span>Last 30 Days</span>
            </button>
          </div>
          <button className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors text-sm">
            <Download size={16} />
            <span>Export</span>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <SpendingByCategory />
        <BalanceHistory />
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Monthly Spending Trends</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-1">Average Monthly Spending</p>
              <p className="text-2xl font-bold text-gray-900">$3,263.39</p>
              <p className="text-xs text-green-600 mt-1 flex items-center">
                <span>↓ 5.2% from last month</span>
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-1">Highest Spending Category</p>
              <p className="text-2xl font-bold text-gray-900">Housing</p>
              <p className="text-xs text-gray-500 mt-1">
                $1,500.00 (46% of total)
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-1">Lowest Spending Category</p>
              <p className="text-2xl font-bold text-gray-900">Entertainment</p>
              <p className="text-xs text-gray-500 mt-1">
                $185.50 (5.7% of total)
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Spending Recommendations</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
              <h3 className="font-medium text-blue-800 mb-2">Reduce Dining Expenses</h3>
              <p className="text-sm text-blue-700">
                Your dining expenses are 15% higher than last month. Consider cooking at home more often to save money.
              </p>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-lg p-4">
              <h3 className="font-medium text-green-800 mb-2">Great Job on Utilities!</h3>
              <p className="text-sm text-green-700">
                Your utility expenses decreased by 8% compared to last month. Keep up the good work!
              </p>
            </div>
            <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
              <h3 className="font-medium text-yellow-800 mb-2">Credit Card Utilization</h3>
              <p className="text-sm text-yellow-700">
                Your credit card utilization is at 12.5%. Try to keep it under 30% to maintain a good credit score.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;