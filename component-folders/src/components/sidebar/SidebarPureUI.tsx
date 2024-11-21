import { SidebarItem } from './SidebarItem';
import styles from './SidebarPureUI.module.css';

type SidebarUIProps = {
  title: string;
  items: string[];
};

export const SidebarPureUI = ({ title, items }: SidebarUIProps) => {
  return (
    <div className={styles.sidebar}>
      <h2>{title}</h2>
      {items.map((item) => <SidebarItem label={item}/>)}
    </div>
  );
};
