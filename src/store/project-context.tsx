import { createContext, useState } from "react";

import projectData from "../data/project.json";

interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  url: string;
  status: string;
}

interface ProjectContextType {
  project: Project[];
  setProject: React.Dispatch<React.SetStateAction<Project[]>>;
}

export const ProejctContext = createContext<ProjectContextType>({
  project: [],
  setProject: () => {},
});

export default function ProjectContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [project, setProject] = useState(projectData);

  const challengesContext = {
    project,
    setProject,
  };

  return (
    <ProejctContext.Provider value={challengesContext}>
      {children}
    </ProejctContext.Provider>
  );
}
