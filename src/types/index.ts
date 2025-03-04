export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface Account {
  id: string;
  type: 'Checking' | 'Savings' | 'Investment' | 'Credit Card';
  name: string;
  balance: number;
  currency: string;
  accountNumber: string;
  availableBalance?: number;
  creditLimit?: number;
}

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'credit' | 'debit';
  category: string;
  accountId: string;
  status: 'pending' | 'completed' | 'failed';
  merchant?: {
    name: string;
    logo?: string;
  };
}

export interface BudgetCategory {
  id: string;
  name: string;
  allocated: number;
  spent: number;
  color: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
  type: 'alert' | 'info' | 'success';
}

export interface FinancialGoal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  category: string;
}