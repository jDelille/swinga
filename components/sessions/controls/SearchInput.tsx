import React from 'react';
import styles from './SessionListControls.module.scss';
import { Search } from 'lucide-react';

type SearchInputProps = {};

const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <div className={styles.searchInput}>
      <input type="search" placeholder='Search Sessions' />
      <div className={styles.iconContainer}>
        <Search size={20} />
      </div>
    </div>
  );
};

export default SearchInput;