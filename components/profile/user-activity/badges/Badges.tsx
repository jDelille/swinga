import React from 'react';
import styles from './Badges.module.scss';
import Empty from '../empty/Empty';

type BadgesProps = {};

const Badges: React.FC<BadgesProps> = () => {

    const badges = [];

  return (
    <div>
      {badges.length === 0 && (
        <Empty 
            title='Nothing yet'
            description="You haven't earned any badges yet."
            primaryBtnText='View Badges'
        />
      )}
    </div>
  );
};

export default Badges;