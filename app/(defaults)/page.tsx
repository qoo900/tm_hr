import ComponentsDashboardAnalytics from '@/components/dashboard/components-dashboard-analytics';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Home',
};

const Home = () => {
    return <ComponentsDashboardAnalytics />;
};

export default Home;
