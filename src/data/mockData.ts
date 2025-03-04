import { Account, Transaction, BudgetCategory, Notification, FinancialGoal, User } from '../types';

export const currentUser: User = {
  id: 'user-1',
  name: 'Alex Johnson',
  email: 'alex.johnson@example.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
};

export const accounts: Account[] = [
  {
    id: 'acc-1',
    type: 'Checking',
    name: 'Primary Checking',
    balance: 5842.21,
    currency: 'USD',
    accountNumber: '****4567',
    availableBalance: 5842.21
  },
  {
    id: 'acc-2',
    type: 'Savings',
    name: 'Emergency Fund',
    balance: 12750.83,
    currency: 'USD',
    accountNumber: '****7890',
    availableBalance: 12750.83
  },
  {
    id: 'acc-3',
    type: 'Investment',
    name: 'Retirement Portfolio',
    balance: 87432.19,
    currency: 'USD',
    accountNumber: '****2345'
  },
  {
    id: 'acc-4',
    type: 'Credit Card',
    name: 'Platinum Rewards',
    balance: -1250.43,
    currency: 'USD',
    accountNumber: '****8901',
    creditLimit: 10000
  }
];

export const transactions: Transaction[] = [
  {
    id: 'txn-1',
    date: '2025-04-15T10:30:00',
    description: 'Grocery Store',
    amount: 78.52,
    type: 'debit',
    category: 'Groceries',
    accountId: 'acc-1',
    status: 'completed',
    merchant: {
      name: 'Whole Foods Market',
      logo: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=80'
    }
  },
  {
    id: 'txn-2',
    date: '2025-04-14T14:45:00',
    description: 'Monthly Salary',
    amount: 3500.00,
    type: 'credit',
    category: 'Income',
    accountId: 'acc-1',
    status: 'completed'
  },
  {
    id: 'txn-3',
    date: '2025-04-13T20:15:00',
    description: 'Restaurant Dinner',
    amount: 124.80,
    type: 'debit',
    category: 'Dining',
    accountId: 'acc-1',
    status: 'completed',
    merchant: {
      name: 'Bistro Gardens',
      logo: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=80'
    }
  },
  {
    id: 'txn-4',
    date: '2025-04-12T09:20:00',
    description: 'Utility Bill',
    amount: 145.30,
    type: 'debit',
    category: 'Utilities',
    accountId: 'acc-1',
    status: 'completed'
  },
  {
    id: 'txn-5',
    date: '2025-04-11T16:50:00',
    description: 'Online Shopping',
    amount: 67.99,
    type: 'debit',
    category: 'Shopping',
    accountId: 'acc-1',
    status: 'completed',
    merchant: {
      name: 'Amazon',
      logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=80'
    }
  },
  {
    id: 'txn-6',
    date: '2025-04-10T11:35:00',
    description: 'Transfer to Savings',
    amount: 500.00,
    type: 'debit',
    category: 'Transfer',
    accountId: 'acc-1',
    status: 'completed'
  },
  {
    id: 'txn-7',
    date: '2025-04-10T11:35:00',
    description: 'Transfer from Checking',
    amount: 500.00,
    type: 'credit',
    category: 'Transfer',
    accountId: 'acc-2',
    status: 'completed'
  },
  {
    id: 'txn-8',
    date: '2025-04-09T08:15:00',
    description: 'Coffee Shop',
    amount: 5.75,
    type: 'debit',
    category: 'Dining',
    accountId: 'acc-1',
    status: 'completed',
    merchant: {
      name: 'Starbucks',
      logo: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=80'
    }
  },
  {
    id: 'txn-9',
    date: '2025-04-08T19:30:00',
    description: 'Gas Station',
    amount: 45.23,
    type: 'debit',
    category: 'Transportation',
    accountId: 'acc-1',
    status: 'completed',
    merchant: {
      name: 'Shell',
      logo: 'https://images.unsplash.com/photo-1545459720-aac8509eb02c?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=80'
    }
  },
  {
    id: 'txn-10',
    date: '2025-04-07T13:45:00',
    description: 'Phone Bill',
    amount: 89.99,
    type: 'debit',
    category: 'Utilities',
    accountId: 'acc-1',
    status: 'completed'
  }
];

export const budgetCategories: BudgetCategory[] = [
  {
    id: 'budget-1',
    name: 'Housing',
    allocated: 1500,
    spent: 1500,
    color: '#4F46E5'
  },
  {
    id: 'budget-2',
    name: 'Food',
    allocated: 600,
    spent: 423.75,
    color: '#10B981'
  },
  {
    id: 'budget-3',
    name: 'Transportation',
    allocated: 400,
    spent: 275.23,
    color: '#F59E0B'
  },
  {
    id: 'budget-4',
    name: 'Entertainment',
    allocated: 300,
    spent: 185.50,
    color: '#EF4444'
  },
  {
    id: 'budget-5',
    name: 'Utilities',
    allocated: 350,
    spent: 235.29,
    color: '#8B5CF6'
  },
  {
    id: 'budget-6',
    name: 'Shopping',
    allocated: 250,
    spent: 187.99,
    color: '#EC4899'
  }
];

export const notifications: Notification[] = [
  {
    id: 'notif-1',
    title: 'Large Transaction Alert',
    message: 'A transaction of $500.00 was made from your Primary Checking account.',
    date: '2025-04-15T10:45:00',
    read: false,
    type: 'alert'
  },
  {
    id: 'notif-2',
    title: 'Low Balance Warning',
    message: 'Your Platinum Rewards credit card is approaching its limit.',
    date: '2025-04-14T16:30:00',
    read: false,
    type: 'alert'
  },
  {
    id: 'notif-3',
    title: 'Direct Deposit Received',
    message: 'Your monthly salary of $3,500.00 has been deposited to your Primary Checking account.',
    date: '2025-04-14T09:15:00',
    read: true,
    type: 'success'
  },
  {
    id: 'notif-4',
    title: 'New Statement Available',
    message: 'Your April statement for Platinum Rewards credit card is now available.',
    date: '2025-04-10T12:00:00',
    read: true,
    type: 'info'
  }
];

export const financialGoals: FinancialGoal[] = [
  {
    id: 'goal-1',
    name: 'Vacation Fund',
    targetAmount: 5000,
    currentAmount: 2750,
    deadline: '2025-12-31',
    category: 'Travel'
  },
  {
    id: 'goal-2',
    name: 'New Car',
    targetAmount: 25000,
    currentAmount: 8500,
    deadline: '2026-06-30',
    category: 'Transportation'
  },
  {
    id: 'goal-3',
    name: 'Home Down Payment',
    targetAmount: 60000,
    currentAmount: 15000,
    deadline: '2027-01-31',
    category: 'Housing'
  }
];

export const monthlySpending = [
  { month: 'Jan', amount: 3245.67 },
  { month: 'Feb', amount: 3502.89 },
  { month: 'Mar', amount: 2980.45 },
  { month: 'Apr', amount: 3150.23 },
  { month: 'May', amount: 3420.18 },
  { month: 'Jun', amount: 3280.92 }
];

export const accountBalanceHistory = [
  { date: '2025-01-01', balance: 4250.32 },
  { date: '2025-02-01', balance: 4820.45 },
  { date: '2025-03-01', balance: 5120.78 },
  { date: '2025-04-01', balance: 5450.21 },
  { date: '2025-05-01', balance: 5842.21 }
];

export const categorySpending = [
  { category: 'Housing', amount: 1500 },
  { category: 'Food', amount: 423.75 },
  { category: 'Transportation', amount: 275.23 },
  { category: 'Entertainment', amount: 185.50 },
  { category: 'Utilities', amount: 235.29 },
  { category: 'Shopping', amount: 187.99 }
];