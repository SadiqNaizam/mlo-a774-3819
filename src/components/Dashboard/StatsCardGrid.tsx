"use client";

import React from 'react';
import StatCard from './StatCard';
import { CircleDollarSign, Share2, ThumbsUp, Star } from 'lucide-react';

const StatsCardGrid: React.FC = () => {
  const statsData = [
    {
      title: 'Earning',
      value: '$ 628',
      icon: <CircleDollarSign className="h-5 w-5" />,
      variant: 'primary' as const,
    },
    {
      title: 'Share',
      value: '2434',
      icon: <Share2 className="h-5 w-5" />,
      variant: 'default' as const,
    },
    {
      title: 'Likes',
      value: '1259',
      icon: <ThumbsUp className="h-5 w-5" />,
      variant: 'default' as const,
    },
    {
      title: 'Rating',
      value: '8,5',
      icon: <Star className="h-5 w-5" />,
      variant: 'default' as const,
    },
  ];

  return (
    <div className="col-span-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {statsData.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          variant={stat.variant}
        />
      ))}
    </div>
  );
};

export default StatsCardGrid;
