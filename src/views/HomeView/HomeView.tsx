import { motion, AnimatePresence } from "framer-motion";

import cn from "classnames/bind";
import styles from "./HomeView.module.scss";

import TypeWrite from "../../components/TyperWrite/TypeWrite";
import introImage from "../../../public/images/introImag.png";
import SectionLayout from "../../components/UI/SectionLayout/SectionLayout";

import { SiTistory, SiGithub } from "react-icons/si";
import { SkillIcon } from "../../components/Icon";
import Html from "../../assets/html.svg?react";
import Lang from "../../assets/lang.svg?react";
import Db from "../../assets/db.svg?react";
import Devops from "../../assets/deploy.svg?react";

const cx = cn.bind(styles);
const snsList = [
  {
    src: SiGithub,
    url: "https://github.com/h4unn",
  },
  {
    src: SiTistory,
    url: "https://h4un2.tistory.com/",
  },
];

const HomeView = () => {
  return (
    <div className={cx("HomeView")}>
      <AnimatePresence mode="wait">
        <AnimatePresence>
          <TypeWrite text="신입 개발자 조현남입니다.<br/>사이트에 방문해 주셔서 감사합니다." />
        </AnimatePresence>
        {/* intro */}
        <AnimatePresence>
          <motion.section
            className={cx("IntroSection")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className={cx("Intro")}>
              <p className={cx("IntroImage")}>
                <img src={introImage} alt="Hyun" />
              </p>
              <div className={cx("IntroText")}>
                <h2>ABOUT ME</h2>
                <p>
                  안녕하세요. <br /> 1년 6개월간 퍼블리셔 경험을 바탕으로 협업에
                  친숙한 신입 프론트엔드 개발자 조현남 입니다. 건강검진 예약
                  사이트의 리뉴얼과 기능 향상 프로젝트를 통해 관리자 기능을 개선
                  개발하는 것에 기여하였습니다. 배운 내용을 블로그에 기록하며
                  꾸준히 성장하고 있습니다. 문제를 해결하고 더 나은 코드를
                  작성하기 위해 끊임없이 도전하는 개발자가 되겠습니다.
                </p>
                <ul className={cx("SnsArea")}>
                  {snsList.map((sns, index) => {
                    const Icon = sns.src;
                    return (
                      <li key={index}>
                        <a href={sns.url} target="_blank" rel="noreferrer">
                          <Icon />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </motion.section>
        </AnimatePresence>
        {/* skills */}
        <SectionLayout title="SKILLS">
          <div className={cx("SkillArea")}>
            <div className="Language">
              <h3>
                <Lang width={32} height={32} />
                <span>Language</span>
              </h3>
              <ul>
                <li>
                  <SkillIcon name="html" />
                </li>
                <li>
                  <SkillIcon name="css" />
                </li>
                <li>
                  <SkillIcon name="javascript" />
                </li>
                <li>
                  <SkillIcon name="typescript" />
                </li>
              </ul>
            </div>
            <div className="Frontend">
              <h3>
                <Html width={32} height={32} />
                <span>Frontend</span>
              </h3>
              <ul>
                <li>
                  <SkillIcon name="react" />
                </li>
                <li>
                  <SkillIcon name="nextjs" />
                </li>
                <li>
                  <SkillIcon name="redux" />
                </li>
                <li>
                  <SkillIcon name="axios" />
                </li>
                <li>
                  <span className={cx("query")}>React-Query</span>
                </li>
                <li>
                  <span className={cx("router")}>React-Router</span>
                </li>
                <li>
                  <SkillIcon name="sass" />
                </li>
                <li>
                  <SkillIcon name="tailwindcss" />
                </li>
                <li>
                  <span className={cx("styled")}>Styled-Component</span>
                </li>
              </ul>
            </div>
            <div className="Backend">
              <h3>
                <Db width={32} height={32} />
                <span>Backend</span>
              </h3>
              <ul>
                <li>
                  <SkillIcon name="nodejs" />
                </li>
                <li>
                  <SkillIcon name="express" />
                </li>
                <li>
                  <SkillIcon name="mysql" />
                </li>
                <li>
                  <SkillIcon name="php" />
                </li>
                <li>
                  <SkillIcon name="mongo" />
                </li>
              </ul>
            </div>
            <div className="DevOps">
              <h3>
                <Devops width={32} height={32} />
                <span>DevOps</span>
              </h3>
              <ul>
                <li>
                  <SkillIcon name="github" />
                </li>
                <li>
                  <SkillIcon name="vercel" />
                </li>
                <li>
                  <SkillIcon name="aws" />
                </li>
              </ul>
            </div>
          </div>
        </SectionLayout>
        {/* project */}
        <SectionLayout title="PROJECT">
          <div className="ProjectArea"></div>
        </SectionLayout>
        {/* <SectionLayout title=""></SectionLayout> */}
      </AnimatePresence>
    </div>
  );
};
export default HomeView;
