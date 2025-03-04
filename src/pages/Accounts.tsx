import React from 'react';
import { CreditCard, Plus } from 'lucide-react';
import { accounts } from '../data/mockData';
import { Account } from '../types';

const getAccountTypeIcon = (type: Account['type']) => {
  switch (type) {
    case 'Checking':
      return <div className="bg-blue-100 p-3 rounded-full"><CreditCard size={24} className="text-blue-600" /></div>;
    case 'Savings':
      return <div className="bg-green-100 p-3 rounded-full"><CreditCard size={24} className="text-green-600" /></div>;
    case 'Investment':
      return <div className="bg-purple-100 p-3 rounded-full"><CreditCard size={24} className="text-purple-600" /></div>;
    case 'Credit Card':
      return <div className="bg-red-100 p-3 rounded-full"><CreditCard size={24} className="text-red-600" /></div>;
    default:
      return <div className="bg-gray-100 p-3 rounded-full"><CreditCard size={24} className="text-gray-600" /></div>;
  }
};

const Accounts: React.FC = () => {
  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Accounts</h1>
          <p className="text-gray-500">Manage your bank accounts and cards.</p>
        </div>
        <button className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors">
          <Plus size={16} />
          <span>Add Account</span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accounts.map((account) => (
          <div key={account.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                {getAccountTypeIcon(account.type)}
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  account.type === 'Credit Card' ? 'bg-red-100 text-red-800' :
                  account.type === 'Checking' ? 'bg-blue-100 text-blue-800' :
                  account.type === 'Savings' ? 'bg-green-100 text-green-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {account.type}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{account.name}</h3>
              <p className="text-sm text-gray-500 mb-4">Account Number: {account.accountNumber}</p>
              
              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm text-gray-500">Current Balance</p>
                <p className={`text-2xl font-bold ${account.balance < 0 ? 'text-red-600' : 'text-gray-900'}`}>
                  {account.balance < 0 ? '-' : ''}${Math.abs(account.balance).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
                
                {account.type === 'Credit Card' && account.creditLimit && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Credit Limit</p>
                    <p className="text-lg font-medium text-gray-900">
                      ${account.creditLimit.toLocaleString('en-US')}
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                      <div
                        className="h-1.5 rounded-full bg-red-500"
                        style={{ width: `${Math.min(Math.abs(account.balance) / account.creditLimit * 100, 100)}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {Math.round(Math.abs(account.balance) / account.creditLimit * 100)}% used
                    </p>
                  </div>
                )}
                
                {(account.type === 'Checking' || account.type === 'Savings') && account.availableBalance !== undefined && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Available Balance</p>
                    <p className="text-lg font-medium text-gray-900">
                      ${account.availableBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 border-t border-gray-100 flex justify-between">
              <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm">
                View Transactions
              </button>
              <button className="text-gray-500 hover:text-gray-700 font-medium text-sm">
                Manage
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accounts;