import React from 'react';
import styles from './sectionContentColumn.module.css';

interface SectionContentColumnProps {
  children: React.ReactNode;
  contact?: boolean;
}

const SectionContentColumn: React.FC<SectionContentColumnProps> = ({
  children,
  contact,
}) => {
  return (
    <div className={styles.container + ' ' + (contact ? styles.contact : '')}>
      {children}
    </div>
  );
};

export default SectionContentColumn;
