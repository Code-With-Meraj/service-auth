import React from "react";
import UserManagement from "./UserManagement";
import styles from "./MainBar.module.css"; // Import CSS Module

interface MainBarProps {
  isCollapsed: boolean;
}

const MainBar: React.FC<MainBarProps> = ({ isCollapsed }) => {
  return (
    <div
      className={`${styles.mainBar} ${isCollapsed ? styles.collapsed : styles.expanded}`} 
    >
      <UserManagement />
    </div>
  );
};

export default MainBar;
