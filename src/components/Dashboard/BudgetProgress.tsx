import React from 'react';
import { budgetCategories } from '../../data/mockData';

const BudgetProgress: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900">Budget Overview</h2>
        <a href="/analytics" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
          View Details
        </a>
      </div>
      <div className="p-6">
        <div className="space-y-5">
          {budgetCategories.map((category) => {
            const percentage = Math.min(Math.round((category.spent / category.allocated) * 100), 100);
            const isOverBudget = category.spent > category.allocated;
            
            return (
              <div key={category.id}>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: category.color }}></div>
                    <span className="text-sm font-medium text-gray-700">{category.name}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    ${category.spent.toLocaleString('en-US')} / ${category.allocated.toLocaleString('en-US')}
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full ${isOverBudget ? 'bg-red-500' : 'bg-indigo-600'}`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs text-gray-500">{percentage}% used</span>
                  {isOverBudget && (
                    <span className="text-xs text-red-500">
                      Over budget by ${(category.spent - category.allocated).toLocaleString('en-US')}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
        <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm">
          Adjust Budget Allocations
        </button>
      </div>
    </div>
  );
};

export default BudgetProgress;