import React from 'react';
import { Home, FileText, Mail, Bell, MapPin, AreaChart, User, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  active?: boolean;
}

const Sidebar: React.FC = () => {
  const navItems: NavItem[] = [
    { label: 'home', href: '#', icon: Home, active: true },
    { label: 'file', href: '#', icon: FileText },
    { label: 'messages', href: '#', icon: Mail },
    { label: 'notification', href: '#', icon: Bell },
    { label: 'location', href: '#', icon: MapPin },
    { label: 'graph', href: '#', icon: AreaChart },
  ];

  return (
    <aside className="w-64 bg-sidebar text-sidebar-foreground p-6 flex flex-col h-full">
      {/* User Profile */}
      <div className="flex flex-col items-center text-center pt-4 pb-10">
        <div className="bg-sidebar-foreground/10 p-2 rounded-full shadow-inner mb-4">
          <div className="bg-white text-sidebar p-3 rounded-full">
            <User className="h-10 w-10" />
          </div>
        </div>
        <h2 className="text-xl font-bold tracking-wider text-white">JOHN DON</h2>
        <p className="text-sm font-light text-sidebar-foreground/70">johndon@company.com</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={cn(
                  'flex items-center space-x-4 py-2 px-3 rounded-md text-sidebar-foreground/80 hover:bg-sidebar-foreground/10 capitalize transition-colors',
                  item.active && 'bg-sidebar-foreground/10 text-white font-medium'
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
