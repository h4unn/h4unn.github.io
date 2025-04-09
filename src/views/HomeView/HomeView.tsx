// import { motion, AnimatePresence } from "framer-motion";

import cn from "classnames/bind";
import styles from "./HomeView.module.scss";

import TypeWrite from "../../components/TyperWrite/TypeWrite";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import ScrollProgress from "../../components/ScrollProgress/ScrollProgress";
import IntroSection from "../../sections/IntroSection/IntroSection";
import SkillSection from "../../sections/SkillSection/SkillSection";
import CareerSection from "../../sections/CareerSection/CareerSection";
import ProjectSection from "../../sections/ProjectSection/ProjectSection";
import AccordionSection from "../../sections/Accordion/AccordionSection";

const cx = cn.bind(styles);

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const HomeView = () => {
  return (
    <div className={cx("HomeView")}>
      <ScrollProgress sectionIds={["INTRO", "SKILL", "CAREER", "PROJECT"]} />

      <TypeWrite text="신입 개발자 조현남입니다.<br/>사이트에 방문해 주셔서 감사합니다." />
      {/* intro */}
      <motion.div
        id="INTRO"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={variants}
      >
        <IntroSection />
      </motion.div>

      {/* skill */}
      <motion.div
        id="SKILL"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={variants}
      >
        <SkillSection />
      </motion.div>

      {/* career */}
      <motion.div
        id="CAREER"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={variants}
      >
        <CareerSection />
      </motion.div>

      {/* project */}
      <motion.div
        id="PROJECT"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={variants}
      >
        <ProjectSection />
      </motion.div>
      {/* accordion */}
      <motion.div
        id="accordion"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={variants}
      >
        <AccordionSection />
      </motion.div>
    </div>
  );
};
export default HomeView;
