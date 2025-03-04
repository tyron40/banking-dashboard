import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { monthlySpending } from '../../data/mockData';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const SpendingChart: React.FC = () => {
  const data = {
    labels: monthlySpending.map(item => item.month),
    datasets: [
      {
        label: 'Monthly Spending',
        data: monthlySpending.map(item => item.amount),
        borderColor: 'rgb(79, 70, 229)',
        backgroundColor: 'rgba(79, 70, 229, 0.1)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: 'rgb(79, 70, 229)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
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
            return `$${context.parsed.y.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: '#9ca3af'
        }
      },
      y: {
        grid: {
          color: '#f3f4f6'
        },
        ticks: {
          color: '#9ca3af',
          callback: function(value: any) {
            return `$${value.toLocaleString('en-US')}`;
          }
        },
        beginAtZero: true
      }
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900">Monthly Spending</h2>
      </div>
      <div className="p-6">
        <div className="h-80">
          <Line data={data} options={options as any} />
        </div>
      </div>
    </div>
  );
};

export default SpendingChart;