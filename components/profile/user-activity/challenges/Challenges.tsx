"use client";

import React from 'react';
import styles from './Challenges.module.scss';
import Empty from '../empty/Empty';
import { useRouter } from 'next/navigation';

type ChallengesProps = {
 
 }
const Challenges: React.FC<ChallengesProps> = () => {

    const router = useRouter();

    const challenges = [];

  return (
    <div className={styles.challengesContainer}>
        {challenges.length === 0 && (
            <Empty 
                title='Nothing yet'
                description="You haven't joined or created any challenges yet."
                primaryBtnText='View challenges'
                secondaryBtnText='Create a challenge'
                primaryBtnClick={() => router.push('/challenges')}
            />
        )}
    </div>
  );
};

export default Challenges;