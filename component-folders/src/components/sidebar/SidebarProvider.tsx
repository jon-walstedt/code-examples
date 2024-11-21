import { createContext, ReactNode, useContext } from 'react';

type SidebarData = {
  title: string;
  items: string[];
};

const SidbarContext = createContext<SidebarData | null>(null);

export const useSidebarData = () => {
  const context = useContext(SidbarContext);
  if (!context) {
    throw new Error('useSidebarData must be used within a SidebarProvider');
  }
  return context;
};

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const data = {
    title: 'Sidebar',
    items: [
      'Overview',
      'Employee Training',
      'Team Meetings',
      'Team Building',
      'Workshops',
      'Events & Conferences',
      'Evaluations & Retros',
    ],
  }; // Replace with SWR fetching logic
  return <SidbarContext.Provider value={data}>{children}</SidbarContext.Provider>;
};
