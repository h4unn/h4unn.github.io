import cn from "classnames/bind";
import styles from "./SectionLayout.module.scss";

type propsType = {
  children: React.ReactNode;
  title: string;
};

const cx = cn.bind(styles);
export default function SectionLayout(props: propsType) {
  return (
    <section className={cx("SectionLayout")}>
      <h2>{props.title}</h2>
      <div className={cx("SectionBox")}>
        <div className={cx("SectionInn")}>{props.children}</div>
      </div>
    </section>
  );
}
