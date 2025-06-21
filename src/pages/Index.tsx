import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import PageTitle from '../components/Dashboard/PageTitle';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';
import BarChart from '../components/Dashboard/BarChart';
import AreaChart from '../components/Dashboard/AreaChart';
import PieChart from '../components/Dashboard/PieChart';

/**
 * The main dashboard overview page.
 * This page orchestrates the layout of all dashboard components, including stats, charts, and other widgets.
 * It uses a CSS grid to arrange the components into a responsive layout that matches the design.
 * Wrapper divs are used for some chart components to enforce the correct column spans,
 * overriding potentially inconsistent styling within the child components themselves, ensuring the page owns the layout.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Row 1: Page Title - Component has internal col-span-full */}
        <PageTitle />

        {/* Row 2: Statistics Cards Grid - Component has internal col-span-full */}
        <StatsCardGrid />

        {/* Row 3: Bar Chart and Pie Chart, laid out to match the visual design (3:1 ratio) */}
        <div className="col-span-full lg:col-span-3">
          <BarChart />
        </div>
        <div className="col-span-full lg:col-span-1">
          <PieChart />
        </div>

        {/* Row 4: Area Chart, spanning the full width */}
        <div className="col-span-full">
          <AreaChart />
        </div>
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
