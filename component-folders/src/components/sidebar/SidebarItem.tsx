import styles from './SidebarItem.module.css';

type SidebarItemProps = {
  label: string;
};

export const SidebarItem = ({label}: SidebarItemProps) => {
  return (
    <div className={styles.sidebarItem}>{label}</div>
  );
};
