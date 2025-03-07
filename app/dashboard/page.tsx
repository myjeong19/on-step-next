'use client';

import { Button } from '@/components/shadcn';
import { useTheme } from 'next-themes';

const Dashboard = () => {
  const { setTheme } = useTheme();

  return (
    <>
      <Button onClick={() => setTheme('white')}>White</Button>
      <Button onClick={() => setTheme('dark')}>Black</Button>
    </>
  );
};

export default Dashboard;
