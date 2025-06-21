"use client";

import React from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const pieData = [
  { name: 'Completed', value: 45 },
  { name: 'Remaining', value: 55 },
];

const COLORS = ['hsl(var(--accent))', 'hsl(var(--sidebar-background))'];

const descriptionData = [
    { label: 'Lorem ipsum' },
    { label: 'Lorem ipsum' },
    { label: 'Lorem ipsum' },
    { label: 'Lorem ipsum' },
];

const PieChart: React.FC = () => {
  return (
    <Card className="col-span-full lg:col-span-1">
      <CardContent className="p-4 flex flex-col items-center justify-center space-y-4">
        <div className="relative h-40 w-40">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsPieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                startAngle={90}
                endAngle={450}
                paddingAngle={2}
                dataKey="value"
                stroke="none"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </RechartsPieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-foreground">45%</span>
          </div>
        </div>
        
        <div className="w-full">
          <ul className="space-y-3">
            {descriptionData.map((item, index) => (
              <li key={index} className="text-sm text-muted-foreground border-b border-border/50 pb-2 last:border-b-0">
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        
        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            Check Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default PieChart;
