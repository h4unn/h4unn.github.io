// import { motion, AnimatePresence } from "framer-motion";

import cn from "classnames/bind";
import styles from "./HomeView.module.scss";

import TypeWrite from "../../components/TyperWrite/TypeWrite";

import IntroSection from "../../sections/IntroSection/IntroSection";
import SkillSection from "../../sections/SkillSection/SkillSection";
import CareerSection from "../../sections/CareerSection/CareerSection";
import ProjectSection from "../../sections/ProjectSection/ProjectSection";
import AccordionSection from "../../sections/Accordion/AccordionSection";

const cx = cn.bind(styles);

const HomeView = () => {
  return (
    <div className={cx("HomeView")}>
      <TypeWrite text="신입 개발자 조현남입니다.<br/>사이트에 방문해 주셔서 감사합니다." />
      {/* intro */}
      <IntroSection />
      {/* skill */}
      <SkillSection />
      {/* career */}
      <CareerSection />
      {/* project */}
      <ProjectSection />
      {/* accordion */}
      <AccordionSection />
    </div>
  );
};
export default HomeView;
