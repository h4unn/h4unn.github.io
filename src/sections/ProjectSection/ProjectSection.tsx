import cn from "classnames/bind";
import styles from "./ProjectSection.module.scss";

import SectionLayout from "../../components/UI/SectionLayout/SectionLayout";

const cx = cn.bind(styles);

export default function ProejectSection() {
  return (
    <SectionLayout title="PROJECT">
      <div className={cx("ProjectArea")}></div>
    </SectionLayout>
  );
}
