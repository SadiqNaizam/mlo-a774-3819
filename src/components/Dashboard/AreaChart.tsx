"use client";

import React from 'react';
import { Area, AreaChart as RechartsAreaChart, ResponsiveContainer, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const chartData = [
  { name: '1', series1: 220, series2: 300 },
  { name: '2', series1: 350, series2: 480 },
  { name: '3', series1: 280, series2: 320 },
  { name: '4', series1: 410, series2: 550 },
  { name: '5', series1: 500, series2: 400 },
  { name: '6', series1: 380, series2: 620 },
  { name: '7', series1: 450, series2: 500 },
  { name: '8', series1: 320, series2: 450 },
  { name: '9', series1: 520, series2: 700 },
  { name: '10', series1: 680, series2: 580 },
  { name: '11', series1: 550, series2: 800 },
  { name: '12', series1: 750, series2: 650 },
];

const MiniCalendar: React.FC = () => {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const dates = [
    '', '', '', 1, 2, 3, 4,
    5, 6, 7, 8, 9, 10, 11,
    12, 13, 14, 15, 16, 17, 18,
    19, 20, 21, 22, 23, 24, 25,
    26, 27, 28, 29, 30, 31, ''
  ];

  return (
    <div className="w-48 text-xs text-muted-foreground p-2 bg-secondary/50 rounded-lg shrink-0">
        <div className="grid grid-cols-7 text-center font-semibold mb-2">
            {days.map((day, i) => <div key={i}>{day}</div>)}
        </div>
        <div className="grid grid-cols-7 text-center gap-y-1">
            {dates.map((date, index) => (
                <div 
                    key={index} 
                    className={`h-6 flex items-center justify-center rounded-sm text-xs ${date === 24 ? 'bg-accent text-accent-foreground' : ''} ${date === 20 ? 'bg-sidebar text-sidebar-foreground' : ''}`}>
                    {date}
                </div>
            ))}
        </div>
    </div>
  );
};

const AreaChart: React.FC = () => {
  return (
    <Card className="col-span-full lg:col-span-3">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-sm text-muted-foreground">Lorem ipsum</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-sidebar" />
            <span className="text-sm text-muted-foreground">Dolor Amet</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-row gap-6 p-4 pt-0">
        <div className="h-[200px] flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsAreaChart data={chartData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorSeries1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorSeries2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--sidebar-background))" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="hsl(var(--sidebar-background))" stopOpacity={0}/>
                    </linearGradient>
                </defs>
              <Tooltip
                cursor={false}
                contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)', fontSize: '12px' }}
              />
              <Area type="monotone" dataKey="series1" stroke="hsl(var(--accent))" fillOpacity={1} fill="url(#colorSeries1)" strokeWidth={2} />
              <Area type="monotone" dataKey="series2" stroke="hsl(var(--sidebar-background))" fillOpacity={1} fill="url(#colorSeries2)" strokeWidth={2}/>
            </RechartsAreaChart>
          </ResponsiveContainer>
        </div>
        <MiniCalendar />
      </CardContent>
    </Card>
  );
};

export default AreaChart;
