import React from 'react';
import TransactionList from '../components/Transactions/TransactionList';

const Transactions: React.FC = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Transactions</h1>
        <p className="text-gray-500">View and manage all your transactions.</p>
      </div>
      
      <TransactionList />
    </div>
  );
};

export default Transactions;