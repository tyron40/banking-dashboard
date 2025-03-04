import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { categorySpending } from '../../data/mockData';

// Register ChartJS components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const SpendingByCategory: React.FC = () => {
  const data = {
    labels: categorySpending.map(item => item.category),
    datasets: [
      {
        data: categorySpending.map(item => item.amount),
        backgroundColor: [
          '#4F46E5', // Indigo
          '#10B981', // Green
          '#F59E0B', // Amber
          '#EF4444', // Red
          '#8B5CF6', // Purple
          '#EC4899', // Pink
        ],
        borderColor: '#FFFFFF',
        borderWidth: 2,
        hoverOffset: 4
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          boxWidth: 12,
          padding: 20,
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#1f2937',
        bodyColor: '#4b5563',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        padding: 12,
        boxPadding: 6,
        usePointStyle: true,
        callbacks: {
          label: function(context: any) {
            const value = context.raw;
            const total = context.dataset.data.reduce((acc: number, val: number) => acc + val, 0);
            const percentage = Math.round((value / total) * 100);
            return `${context.label}: $${value.toLocaleString('en-US')} (${percentage}%)`;
          }
        }
      }
    }
  };

  const totalSpending = categorySpending.reduce((acc, item) => acc + item.amount, 0);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900">Spending by Category</h2>
      </div>
      <div className="p-6">
        <div className="h-80 relative">
          <Doughnut data={data} options={options as any} />
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <p className="text-gray-500 text-sm">Total Spending</p>
            <p className="text-2xl font-bold text-gray-900">${totalSpending.toLocaleString('en-US')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpendingByCategory;