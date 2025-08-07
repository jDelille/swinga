import SinglePageLayout from '@/components/layout/SinglePageLayout';
import Info from '@/components/leaderboard/info/Info';
import LeaderboardHeader from '@/components/leaderboard/header/LeaderboardHeader';
import Top3 from '@/components/leaderboard/top-3/Top3';
import React from 'react';
import List from '@/components/leaderboard/list/List';

type LeaderboardPageProps = {};

const LeaderboardPage: React.FC<LeaderboardPageProps> = () => {
  return (
    <div className="page">
    <SinglePageLayout>
        <LeaderboardHeader />
        <Top3 />
        <Info />
        <List />
    </SinglePageLayout>
    </div>
  );
};

export default LeaderboardPage;