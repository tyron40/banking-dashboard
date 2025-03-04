import React from 'react';
import { CreditCard, Wallet, TrendingUp, CreditCard as CreditCardIcon } from 'lucide-react';
import { accounts } from '../../data/mockData';
import { Account } from '../../types';

const getAccountIcon = (type: Account['type']) => {
  switch (type) {
    case 'Checking':
      return <Wallet size={20} className="text-blue-500" />;
    case 'Savings':
      return <CreditCard size={20} className="text-green-500" />;
    case 'Investment':
      return <TrendingUp size={20} className="text-purple-500" />;
    case 'Credit Card':
      return <CreditCardIcon size={20} className="text-red-500" />;
    default:
      return <CreditCard size={20} className="text-gray-500" />;
  }
};

const AccountsList: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900">Your Accounts</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {accounts.map((account) => (
          <div key={account.id} className="p-6 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  {getAccountIcon(account.type)}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{account.name}</h3>
                  <p className="text-sm text-gray-500">
                    {account.type} • {account.accountNumber}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-semibold ${account.balance < 0 ? 'text-red-600' : 'text-gray-900'}`}>
                  {account.balance < 0 ? '-' : ''}${Math.abs(account.balance).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
                {account.type === 'Credit Card' && account.creditLimit && (
                  <p className="text-xs text-gray-500">
                    Credit Limit: ${account.creditLimit.toLocaleString('en-US')}
                  </p>
                )}
                {(account.type === 'Checking' || account.type === 'Savings') && account.availableBalance !== undefined && (
                  <p className="text-xs text-gray-500">
                    Available: ${account.availableBalance.toLocaleString('en-US')}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 bg-gray-50 border-t border-gray-100">
        <button className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors">
          Add New Account
        </button>
      </div>
    </div>
  );
};

export default AccountsList;