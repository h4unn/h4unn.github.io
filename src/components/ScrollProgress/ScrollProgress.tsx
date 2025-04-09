import { useEffect, useState, useRef } from "react";
import cn from "classnames/bind";
import styles from "./ScrollProgress.module.scss";

const cx = cn.bind(styles);

interface ScrollProgressProps {
  sectionIds: string[]; // 섹션들의 ID 배열
}

export default function ScrollProgress({ sectionIds }: ScrollProgressProps) {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    // ID를 기반으로 DOM 요소 가져오기
    sectionsRef.current = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // 현재 활성화된 섹션 찾기
      let activeIndex = 0;
      sectionsRef.current.forEach((section, index) => {
        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          activeIndex = index;
        }
      });

      setActiveSection(activeIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return (
    <div className={cx("progress-container")}>
      {sectionIds.map((object, index) => (
        <div key={index} className={cx("progress-item")}>
          <span
            className={cx("step-label", { active: index === activeSection })}
          >
            {object}
          </span>
          <div
            className={cx("progress-step", {
              active: index === activeSection,
              completed: index < activeSection,
            })}
          ></div>
        </div>
      ))}
    </div>
  );
}
