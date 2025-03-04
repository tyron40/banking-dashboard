import React from 'react';
import { CreditCard, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import { accounts } from '../../data/mockData';

const AccountSummary: React.FC = () => {
  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);
  
  // Calculate total assets (positive balances)
  const totalAssets = accounts
    .filter(account => account.balance > 0)
    .reduce((sum, account) => sum + account.balance, 0);
  
  // Calculate total liabilities (negative balances)
  const totalLiabilities = accounts
    .filter(account => account.balance < 0)
    .reduce((sum, account) => sum + Math.abs(account.balance), 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Total Balance</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">
              ${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </h3>
            <p className="text-sm text-green-600 mt-1 flex items-center">
              <TrendingUp size={16} className="mr-1" />
              <span>+2.5% from last month</span>
            </p>
          </div>
          <div className="bg-indigo-100 p-3 rounded-full">
            <DollarSign size={24} className="text-indigo-600" />
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Total Assets</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">
              ${totalAssets.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </h3>
            <p className="text-sm text-green-600 mt-1 flex items-center">
              <TrendingUp size={16} className="mr-1" />
              <span>+3.2% from last month</span>
            </p>
          </div>
          <div className="bg-green-100 p-3 rounded-full">
            <TrendingUp size={24} className="text-green-600" />
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Total Liabilities</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">
              ${totalLiabilities.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </h3>
            <p className="text-sm text-red-600 mt-1 flex items-center">
              <TrendingDown size={16} className="mr-1" />
              <span>-1.8% from last month</span>
            </p>
          </div>
          <div className="bg-red-100 p-3 rounded-full">
            <TrendingDown size={24} className="text-red-600" />
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Active Accounts</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">{accounts.length}</h3>
            <p className="text-sm text-gray-500 mt-1">Last updated today</p>
          </div>
          <div className="bg-purple-100 p-3 rounded-full">
            <CreditCard size={24} className="text-purple-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSummary;