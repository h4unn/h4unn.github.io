import cn from "classnames/bind";
import styles from "./Header.module.scss";
import logo from "@public/images/header_logo.png";
import { SiTistory, SiGithub } from "react-icons/si";

const cx = cn.bind(styles);

const snsList = [
  {
    src: SiGithub,
    url: "https://github.com/h4unn",
  },
  {
    src: SiTistory,
    url: "https://h4un2.tistory.com/",
  },
];

export default function Header() {
  return (
    <header className={cx("header")}>
      <h1>
        <a href="/">
          <img src={logo} alt="chohyunnam_portfolio" />
        </a>
      </h1>
      <ul className={cx("sns")}>
        {snsList.map((sns, index) => {
          const Icon = sns.src;
          return (
            <li key={index}>
              <a href={sns.url} target="_blank" rel="noreferrer">
                <Icon />
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
