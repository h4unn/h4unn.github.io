import cn from "classnames/bind";
import styles from "./LoadingIndicator.module.scss";
const cx = cn.bind(styles);

export default function LoadingIndicator() {
  return (
    <div className={cx("lds-ring")}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
