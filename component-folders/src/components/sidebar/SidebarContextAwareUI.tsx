import { useSidebarData } from './SidebarProvider';
import { SidebarPureUI } from './SidebarPureUI';

export const SidebarContextAwareUI = () => {
  const { title, items } = useSidebarData();
  return <SidebarPureUI title={title} items={items} />;
};
