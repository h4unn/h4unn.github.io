import { useState } from "react";
import cn from "classnames/bind";
import styles from "./TabList.module.scss";
import { SkillIcon, CDN_URL } from "../../components/Icon";

import { Project } from "../../types/project.type";
import { useTabListContext } from "./TabList";
import Modal from "../Modal/Modal";
import { Button } from "../Button/Button";

const cx = cn.bind(styles);

interface TabListProps {
  className?: string;
}

const TabItem = ({
  item,
  handleFunc,
}: {
  item: Project;
  handleFunc: (item: Project) => void;
}) => {
  return (
    <li
      key={item.id}
      className={cx("ProjectsItem")}
      onClick={() => handleFunc(item)}
    >
      <div className={cx("ProjectsLogoImage")}>
        <img src={item.logo} alt="" />
      </div>

      <div className={cx("ProjectTitle")}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <span className={cx("ProjectDate")}>{item.date}</span>
      </div>
      <ul className={cx("ProjectWork")}>
        {item.works
          ? item.works.map((work) => (
              <li key={work} className={cx("ProjectWorkItem")}>
                {work}
              </li>
            ))
          : null}
      </ul>
      <div className={cx("ProjectStack")}>
        {item.stack.map((skill) => {
          const skillIconExists = Object.keys(CDN_URL).includes(skill);
          return skillIconExists ? (
            <SkillIcon key={skill} name={skill as keyof typeof CDN_URL} />
          ) : (
            <span key={skill} className={cx(skill)}>
              {skill}
            </span>
          );
        })}
      </div>
    </li>
  );
};

export default function TabContent(props: TabListProps) {
  const [selectedItem, setSelectedItem] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { className } = props;
  const { projects } = useTabListContext();

  function handleModalOpen(item: Project) {
    setSelectedItem(item);
    setIsModalOpen(true);
  }
  function handleModalClose() {
    setSelectedItem(null);
    setIsModalOpen(false);
  }

  return (
    <ul className={cx("TabContent", className)}>
      {projects.length > 0 ? (
        projects.map((item) => (
          <TabItem key={item.id} item={item} handleFunc={handleModalOpen} />
        ))
      ) : (
        <li className={cx("EmptyProject")}>No projects</li>
      )}
      <Modal open={isModalOpen} onClose={handleModalClose}>
        {selectedItem && (
          <div className={cx("ProjectsModal")}>
            <div className={cx("ProjectsHeader")}>
              <p className={cx("ProjectLogo")}>
                <img src={selectedItem.logo} alt={selectedItem.title} />
              </p>
              <h2>{selectedItem.title}</h2>
              <p className={cx("ProjectDesc")}>{selectedItem.description}</p>
              <span className={cx("ProjectDate")}>{selectedItem.date}</span>
            </div>

            {selectedItem.image && (
              <div className={cx("ProjectImage")}>
                {selectedItem.image.map((img, idx) => (
                  <img key={idx} src={img} alt={selectedItem.title} />
                ))}
              </div>
            )}
            <ul className={cx("ProjectWork")}>
              {selectedItem.works.map((work, idx) => (
                <li key={idx} className={cx("ProjectWorkItem")}>
                  {work}
                </li>
              ))}
            </ul>
            <div className={cx("ProjectStack")}>
              {selectedItem.stack.map((skill) => {
                const skillIconExists = Object.keys(CDN_URL).includes(skill);
                return skillIconExists ? (
                  <SkillIcon key={skill} name={skill as keyof typeof CDN_URL} />
                ) : (
                  <span key={skill} className={cx("AutherStack", skill)}>
                    {skill}
                  </span>
                );
              })}
            </div>
            <div className={cx("ProjectsButton")}>
              {selectedItem.url && (
                <Button onClick={() => window.open(selectedItem.url, "_blank")}>
                  사이트 방문하기
                </Button>
              )}
              {selectedItem.pdf && (
                <Button
                  onClick={() => {
                    window.open(selectedItem.pdf, "_blank");
                  }}
                >
                  PPT 보기
                </Button>
              )}
              {selectedItem.github && (
                <Button
                  onClick={() => {
                    window.open(selectedItem.github, "_blank");
                  }}
                >
                  Github
                </Button>
              )}
            </div>
          </div>
        )}
      </Modal>
    </ul>
  );
}
