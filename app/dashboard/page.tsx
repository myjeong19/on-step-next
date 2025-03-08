'use client';

import Image from 'next/image';
import { ShadowContainer } from '@/components/ui/shadow-container';

const Dashboard = () => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString('ko-KR', {
    month: 'long',
    day: 'numeric',
  });

  const weekday = date.toLocaleDateString('ko-KR', {
    weekday: 'short',
  });

  return (
    <>
      <section>
        <ShadowContainer className="flex flex-col">
          <div className="flex items-center gap-2">
            <Image src="/puzzle.svg" alt="logo" width={15} height={20} />
            <span className="font-semibold">
              {formattedDate} ({weekday})
            </span>
            <strong className="font-semibold">오늘의 문제</strong>
          </div>
        </ShadowContainer>
      </section>

      <section>
        <ShadowContainer>
          <h1>Dashboard</h1>
        </ShadowContainer>
      </section>
    </>
  );
};

export default Dashboard;
