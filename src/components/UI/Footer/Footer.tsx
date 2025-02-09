import cn from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = cn.bind(styles);

export default function Footer() {
  return (
    <>
      <article className={cx("Contact")}>
        <div className={cx("Inner")}>
          <div className={cx("IntroDuce")}>
            <h5>여기까지 신입 개발자 조현남의 프로필입니다</h5>
            <p>
              코딩에 대한 관심과 커뮤니케이션이 탑제된 저에게 관심이 생기신다면
              연락해주세요⭐️
            </p>
          </div>
          <div className={cx("contactInfo")}>
            <ul>
              <li>
                <p className={cx("infoTit")}>Where do you live?</p>
                <p className={cx("infoDesc")}>Sillim-dong, Gwanak-gu</p>
              </li>
              <li>
                <p className={cx("infoTit")}>Give me a call 😆</p>
                <p className={cx("infoDesc")}>
                  <a href="tel:010-5811-2548">T. +82 (0)10 5811 2548</a>
                </p>
              </li>
              <li>
                <p className={cx("infoTit")}>why don’t you email me?</p>
                <p className={cx("infoDesc")}>wiwi154@naver.com</p>
              </li>
            </ul>
          </div>
        </div>
      </article>

      <footer className={cx("Footer")}>
        <p>
          Copyright 2022. Web Publisher developer portfolio-- by hyun nam - cho
        </p>
      </footer>
    </>
  );
}
