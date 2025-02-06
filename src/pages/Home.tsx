import HomeView from "../views/HomeView/HomeView";
import ProjectContextProvider from "../store/project-context";

const Home = () => {
  return (
    <>
      <ProjectContextProvider>
        <HomeView />
      </ProjectContextProvider>
    </>
  );
};

export default Home;
