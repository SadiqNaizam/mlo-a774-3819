"use client";

import React from 'react';
import { Bar, BarChart as RechartsBarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const chartData = [
  { name: 'JAN', '2019': 18, '2020': 35 },
  { name: 'FEB', '2019': 28, '2020': 43 },
  { name: 'MAR', '2019': 12, '2020': 22 },
  { name: 'APR', '2019': 4, '2020': 18 },
  { name: 'MAY', '2019': 32, '2020': 25 },
  { name: 'JUNE', '2019': 22, '2020': 45 },
  { name: 'JULY', '2019': 33, '2020': 12 },
  { name: 'AUG', '2019': 18, '2020': 21 },
  { name: 'SEP', '2019': 24, '2020': 38 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    if (label === 'JUNE') {
      return (
        <div className="bg-sidebar text-sidebar-foreground p-2 rounded-md shadow-lg text-xs">
            <p className="font-bold">28.79</p>
        </div>
      );
    }
    return (
      <div className="bg-background border border-border p-2 rounded-md shadow-lg text-xs">
        <p className="font-bold mb-1">{label}</p>
        {payload.map((pld: any, index: number) => (
          <p key={index} style={{ color: pld.fill }}>
            {`${pld.name}: ${pld.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const BarChart: React.FC = () => {
  return (
    <Card className="col-span-full lg:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-base font-medium">Result</CardTitle>
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span className="text-xs text-muted-foreground">2019</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-sidebar" />
                <span className="text-xs text-muted-foreground">2020</span>
            </div>
            <Button className="h-8 bg-accent px-3 text-accent-foreground hover:bg-accent/90 text-xs">
                Check Now
            </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsBarChart data={chartData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }} barSize={10}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} />
              <Tooltip cursor={{ fill: 'hsla(var(--card), 0.5)' }} content={<CustomTooltip />} wrapperStyle={{ outline: 'none' }}/>
              <Bar dataKey="2019" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="2020" fill="hsl(var(--sidebar-background))" radius={[4, 4, 0, 0]} />
            </RechartsBarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarChart;
