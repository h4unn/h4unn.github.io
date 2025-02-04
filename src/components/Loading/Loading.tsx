import cn from "classnames/bind";

import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";

import styles from "./Loading.module.scss";

const cx = cn.bind(styles);

export default function Loading(props: { count?: number }) {
  const { count } = props;

  return (
    <div className={cx("Loading")}>
      <div className={cx("LoadingText")}>
        <LoadingIndicator />
        <p>로딩중</p>
        <p>{count}</p>
      </div>
    </div>
  );
}
