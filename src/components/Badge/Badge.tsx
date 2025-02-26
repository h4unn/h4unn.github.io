import cn from "classnames/bind";
import styles from "./Badge.module.scss";

const cx = cn.bind(styles);

interface BadgeProps {
  className?: string;
  children: React.ReactNode;
}

export default function Badge({ className, children }: BadgeProps) {
  return <span className={cx("Badge", className)}>{children}</span>;
}
