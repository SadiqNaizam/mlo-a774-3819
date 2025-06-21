import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-card px-6 shrink-0">
      <div>
        <h1 className="text-xl font-semibold text-foreground">Dashboard User</h1>
      </div>
      <div>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6 text-muted-foreground" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
