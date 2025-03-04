import React from 'react';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { transactions } from '../../data/mockData';

const RecentTransactions: React.FC = () => {
  // Get the 5 most recent transactions
  const recentTransactions = [...transactions]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
        <a href="/transactions" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
          View All
        </a>
      </div>
      <div className="divide-y divide-gray-100">
        {recentTransactions.map((transaction) => (
          <div key={transaction.id} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center">
              <div className={`p-2 rounded-full mr-4 ${
                transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'
              }`}>
                {transaction.type === 'credit' ? (
                  <ArrowDownLeft size={20} className="text-green-600" />
                ) : (
                  <ArrowUpRight size={20} className="text-red-600" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-medium text-gray-900">{transaction.description}</h3>
                  <p className={`font-semibold ${
                    transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.type === 'credit' ? '+' : '-'}${transaction.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                </div>
                <div className="flex justify-between mt-1">
                  <p className="text-sm text-gray-500">{transaction.category}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(transaction.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
        <a href="/transactions" className="text-indigo-600 hover:text-indigo-800 font-medium text-sm">
          See all transactions
        </a>
      </div>
    </div>
  );
};

export default RecentTransactions;