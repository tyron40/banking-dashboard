import React, { useState } from 'react';
import { ArrowUpRight, ArrowDownLeft, Search, Filter, Download } from 'lucide-react';
import { transactions } from '../../data/mockData';
import { Transaction } from '../../types';

const TransactionList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedStatus, setSelectedStatus] = useState<string>('');
  
  // Get unique categories
  const categories = Array.from(new Set(transactions.map(t => t.category)));
  
  // Filter transactions based on search and filters
  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          transaction.merchant?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          transaction.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory ? transaction.category === selectedCategory : true;
    const matchesType = selectedType ? transaction.type === selectedType : true;
    const matchesStatus = selectedStatus ? transaction.status === selectedStatus : true;
    
    return matchesSearch && matchesCategory && matchesType && matchesStatus;
  });

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Transactions</h2>
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search transactions..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          
          <div className="flex space-x-2">
            <select
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            
            <select
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">All Types</option>
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
            </select>
            
            <select
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="">All Status</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="failed">Failed</option>
            </select>
            
            <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50">
              <Filter size={20} className="text-gray-500" />
            </button>
            
            <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50">
              <Download size={20} className="text-gray-500" />
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(transaction.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full mr-3 ${
                        transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'
                      }`}>
                        {transaction.type === 'credit' ? (
                          <ArrowDownLeft size={16} className="text-green-600" />
                        ) : (
                          <ArrowUpRight size={16} className="text-red-600" />
                        )}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {transaction.description}
                        </div>
                        {transaction.merchant && (
                          <div className="text-xs text-gray-500">
                            {transaction.merchant.name}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      transaction.status === 'completed' ? 'bg-green-100 text-green-800' :
                      transaction.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-right">
                    <span className={transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'}>
                      {transaction.type === 'credit' ? '+' : '-'}${transaction.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing <span className="font-medium">{filteredTransactions.length}</span> transactions
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            Previous
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;