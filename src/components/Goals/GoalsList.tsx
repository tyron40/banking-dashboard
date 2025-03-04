import React from 'react';
import { PiggyBank, Plus } from 'lucide-react';
import { financialGoals } from '../../data/mockData';

const GoalsList: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Financial Goals</h2>
        <button className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors">
          <Plus size={16} />
          <span>New Goal</span>
        </button>
      </div>
      
      <div className="divide-y divide-gray-100">
        {financialGoals.map((goal) => {
          const progress = Math.round((goal.currentAmount / goal.targetAmount) * 100);
          const deadline = new Date(goal.deadline);
          const today = new Date();
          const daysLeft = Math.ceil((deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
          
          return (
            <div key={goal.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <PiggyBank size={24} className="text-indigo-600" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">{goal.name}</h3>
                      <p className="text-sm text-gray-500">{goal.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">
                        ${goal.currentAmount.toLocaleString('en-US')} / ${goal.targetAmount.toLocaleString('en-US')}
                      </p>
                      <p className="text-sm text-gray-500">
                        {daysLeft > 0 ? `${daysLeft} days left` : 'Deadline passed'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <div
                      className="h-2.5 rounded-full bg-indigo-600"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{progress}% complete</span>
                    <div className="flex space-x-2">
                      <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                        Add Funds
                      </button>
                      <button className="text-sm text-gray-500 hover:text-gray-700 font-medium">
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {financialGoals.length === 0 && (
        <div className="p-8 text-center">
          <div className="bg-indigo-100 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center mb-4">
            <PiggyBank size={32} className="text-indigo-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No financial goals yet</h3>
          <p className="text-gray-500 mb-4">Create your first financial goal to start tracking your progress.</p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors">
            Create a Goal
          </button>
        </div>
      )}
    </div>
  );
};

export default GoalsList;