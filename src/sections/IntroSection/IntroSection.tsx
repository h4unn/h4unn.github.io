import cn from "classnames/bind";
import styles from "./IntroSection.module.scss";
import { SiTistory, SiGithub } from "react-icons/si";

import introImage from "../../../public/images/introImag.png";

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

const cx = cn.bind(styles);

export default function IntroSection() {
  return (
    <div className={cx("Intro")}>
      <p className={cx("IntroImage")}>
        <img src={introImage} alt="Hyun" />
      </p>
      <div className={cx("IntroText")}>
        <h2>ABOUT ME</h2>
        <p>
          안녕하세요. <br /> 1년 6개월간 퍼블리셔 경험을 바탕으로 협업에 친숙한
          신입 프론트엔드 개발자 조현남 입니다. 건강검진 예약 사이트의 리뉴얼과
          기능 향상 프로젝트를 통해 관리자 기능을 개선 개발하는 것에
          기여하였습니다. 배운 내용을 블로그에 기록하며 꾸준히 성장하고
          있습니다. 문제를 해결하고 더 나은 코드를 작성하기 위해 끊임없이
          도전하는 개발자가 되겠습니다.
        </p>
        <ul className={cx("SnsArea")}>
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
      </div>
    </div>
  );
}
