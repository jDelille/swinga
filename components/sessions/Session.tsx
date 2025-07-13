import React from 'react';
import styles from './Sessions.module.scss';
import Table from '../reusable/table/Table';

type SessionProps = {
 shots: any;
 }
const Session: React.FC<SessionProps> = ({shots}) => {
  return (
    <div className={styles.session}>
      <Table shots={shots} hideSelect />
    </div>
  );
};

export default Session;