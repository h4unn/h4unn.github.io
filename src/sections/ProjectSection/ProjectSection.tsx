import cn from "classnames/bind";
import styles from "./ProjectSection.module.scss";

import SectionLayout from "../../components/UI/SectionLayout/SectionLayout";

import TabList from "../../components/TabList/TabList";
import TabButton from "../../components/TabList/TabButton";
import TabContent from "../../components/TabList/TabContent";

import ProjectData from "../../data/project.json";

const cx = cn.bind(styles);

export default function ProejectSection() {
  return (
    <SectionLayout title="PROJECT">
      <div className={cx("ProjectArea")}>
        <TabList data={ProjectData}>
          <div className={cx("ButtonArea")}>
            <TabButton>Personal</TabButton>
            <TabButton>Company</TabButton>
          </div>
          <TabContent />
        </TabList>
      </div>
    </SectionLayout>
  );
}
