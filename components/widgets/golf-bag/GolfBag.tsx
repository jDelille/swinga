"use client";

import React from 'react';
import styles from './GolfBag.module.scss';
import { useGolfBag } from '@/hooks/golf-bag/getGolfBag';

type GolfBagProps = {
 
 }
const GolfBag: React.FC<GolfBagProps> = () => {
      const { golfBag } = useGolfBag();

      console.log(golfBag)
    
  return (
    <div className={styles.golfBagWidget}>
      <div className={styles.header}>
        Your Golf Bag
      </div>
      <ul>
        {golfBag.map((club) => (
            <li key={club.id}>
                {club.name}
            </li>
        ))}
      </ul>
    </div>
  );
};

export default GolfBag;