/*
## Button 컴포넌트

### 사용 방법

variant -> primary : 기본 (배경 primary-color, 글자색 : #fff)
variant -> outline : 테두리만 있는 버튼

*/

import React from "react";
import cn from "classnames/bind";
import styles from "./Button.module.scss";

const cx = cn.bind(styles);

type ButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: "button" | "submit";
  variant?: "primary" | "outline"; // 버튼 스타일
  backgroundColor?: string; // 버튼 배경색
  textColor?: string; // 버튼 글자 색
  borderColor?: string; // 버튼 테두리 색
  width?: string | number; // 버튼 가로 길이
  height?: string | number; // 버튼 세로 길이
  className?: string; // 추가 클래스 이름
  disabled?: boolean; // 버튼 비활성화 여부
  children?: React.ReactNode;
};

export const Button = (props: ButtonProps) => {
  const {
    onClick,
    type = "button",
    variant = "primary",
    className = "",
    disabled = false,
  } = props;

  return (
    <button
      className={cx("Button", variant, className)}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {props.children}
    </button>
  );
};
