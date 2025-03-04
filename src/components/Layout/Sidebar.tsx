import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CreditCard, 
  BarChart3, 
  ArrowLeftRight, 
  PiggyBank, 
  Bell, 
  Settings, 
  HelpCircle, 
  LogOut 
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: <LayoutDashboard size={20} /> },
    { name: 'Accounts', path: '/accounts', icon: <CreditCard size={20} /> },
    { name: 'Transactions', path: '/transactions', icon: <ArrowLeftRight size={20} /> },
    { name: 'Analytics', path: '/analytics', icon: <BarChart3 size={20} /> },
    { name: 'Goals', path: '/goals', icon: <PiggyBank size={20} /> },
    { name: 'Notifications', path: '/notifications', icon: <Bell size={20} /> },
    { name: 'Settings', path: '/settings', icon: <Settings size={20} /> },
  ];

  return (
    <aside className="bg-indigo-900 text-white w-64 min-h-screen flex flex-col">
      <div className="p-5 border-b border-indigo-800">
        <div className="flex items-center space-x-2">
          <CreditCard className="text-indigo-300" size={28} />
          <h1 className="text-xl font-bold">SecureBank</h1>
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-indigo-800 text-white'
                      : 'text-indigo-200 hover:bg-indigo-800 hover:text-white'
                  }`
                }
              >
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-indigo-800">
        <ul className="space-y-1">
          <li>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-indigo-200 hover:bg-indigo-800 hover:text-white transition-colors">
              <HelpCircle size={20} />
              <span>Help & Support</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-indigo-200 hover:bg-indigo-800 hover:text-white transition-colors">
              <LogOut size={20} />
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;