import cn from "classnames/bind";
import { m } from "framer-motion";

import TypeWrite from "../TyperWrite/TypeWrite";

import styles from "./Loading.module.scss";

const cx = cn.bind(styles);

export default function Loading(props: { count?: number }) {
  const { count } = props;

  return (
    <div className={cx("Loading")}>
      <m.div className={cx("LoadingText")} exit={{ opacity: 0 }}>
        <h2>
          로딩중
          <TypeWrite text={"..."} delay={1} cursor={""} />
        </h2>
        <p>{count}</p>
      </m.div>
    </div>
  );
}
