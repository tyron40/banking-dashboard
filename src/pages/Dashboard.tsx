import React from 'react';
import AccountSummary from '../components/Dashboard/AccountSummary';
import AccountsList from '../components/Dashboard/AccountsList';
import RecentTransactions from '../components/Dashboard/RecentTransactions';
import SpendingChart from '../components/Dashboard/SpendingChart';
import BudgetProgress from '../components/Dashboard/BudgetProgress';

const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500">Welcome back! Here's an overview of your finances.</p>
      </div>
      
      <AccountSummary />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <SpendingChart />
        <BudgetProgress />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AccountsList />
        <RecentTransactions />
      </div>
    </div>
  );
};

export default Dashboard;