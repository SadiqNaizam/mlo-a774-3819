"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  variant?: 'default' | 'primary';
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, variant = 'default', className }) => {
  return (
    <Card
      className={cn(
        'rounded-md shadow-sm',
        {
          'bg-card text-card-foreground': variant === 'default',
          'bg-sidebar text-sidebar-foreground': variant === 'primary',
        },
        className
      )}
    >
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col space-y-1">
            <p className={cn(
              'text-sm font-medium',
              variant === 'default' ? 'text-muted-foreground' : 'text-gray-300'
            )}>
              {title}
            </p>
            <p className="text-3xl font-bold tracking-tight">{value}</p>
          </div>
          <div className={cn(
            'flex h-8 w-8 items-center justify-center rounded-md',
            {
              'bg-accent/20 text-accent': variant === 'default',
              'bg-white/90 text-sidebar': variant === 'primary',
            }
          )}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
