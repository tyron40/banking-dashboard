import React from 'react';
import GoalsList from '../components/Goals/GoalsList';

const Goals: React.FC = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Financial Goals</h1>
        <p className="text-gray-500">Track and manage your savings goals.</p>
      </div>
      
      <GoalsList />
    </div>
  );
};

export default Goals;