import cn from "classnames/bind";
import styles from "./SkillSection.module.scss";

import { SkillIcon } from "../../components/Icon";
import Html from "../../assets/html.svg?react";
import Lang from "../../assets/lang.svg?react";
import Db from "../../assets/db.svg?react";
import Devops from "../../assets/deploy.svg?react";

import SectionLayout from "../../components/UI/SectionLayout/SectionLayout";

const cx = cn.bind(styles);

export default function SkillSection() {
  return (
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
  );
}
