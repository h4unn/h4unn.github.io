import cn from "classnames/bind";
import styles from "./TabList.module.scss";

import { Project } from "../../types/project.type";

const cx = cn.bind(styles);
import { createContext, useContext, useState } from "react";

interface TabListContextType {
  selectedTab: string;
  projects: Project[];
  setSelectedTab: (tab: string) => void;
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}

interface TabListProps {
  className?: string;
  children: React.ReactNode;
  data?: Project[];
}
const TabListContext = createContext<TabListContextType | undefined>(undefined);

export function useTabListContext() {
  const ctx = useContext(TabListContext);

  if (!ctx) {
    throw new Error("Tab Errors");
  }

  return ctx;
}

export default function TabList({ className, children, data }: TabListProps) {
  const [selectedTab, setSelectedTab] = useState("Project");
  const [projects, setProjects] = useState<Project[]>(
    data!.filter((item) => item.status == selectedTab) || []
  );

  function handleSetSelectedTab(tab: string) {
    setSelectedTab(tab);
    filterProjects(tab);
  }

  function filterProjects(tab: string) {
    if (data) {
      const filteredData = data.filter((item: Project) => item.status === tab);
      setProjects(filteredData);
    } else {
      return [];
    }
  }

  const value = {
    selectedTab,
    projects,
    setSelectedTab: handleSetSelectedTab,
    setProjects,
  };

  return (
    <TabListContext.Provider value={value}>
      <div className={cx({ className }, "TabList")}>{children}</div>
    </TabListContext.Provider>
  );
}
