import React from "react";
import Header from "../Header/Header";
import cn from "classnames/bind";
import styles from "./Layout.module.scss";

const cx = cn.bind(styles);

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className={cx("Wrapper")}>
      <div className={cx("Inner")}>
        <Header />
        {children}
      </div>
    </div>
  );
}
