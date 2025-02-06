import { useState } from "react";
import cn from "classnames/bind";
import styles from "./TabList.module.scss";

import { Project } from "../../types/project.type";
import { useTabListContext } from "./TabList";
import Modal from "../Modal/Modal";

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
      <div className={cx("ProjectTitle")}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
      <div className={cx("ProjectsImage")}>
        {/* <img src={item.image} alt={item.title} /> */}
      </div>
      <span className={cx("ProjectUrl")}>{item.url}</span>
    </li>
  );
};

export default function TabContent(props: TabListProps) {
  const [selectedItem, setSelectedItem] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { className = "TabContent" } = props;
  const { projects } = useTabListContext();

  function handleModalOpen(item: Project) {
    setSelectedItem(item);
    setIsModalOpen(true);
  }
  function handleModalClose() {
    setSelectedItem(null);
    setIsModalOpen(false);
  }

  console.log(selectedItem, isModalOpen);

  return (
    <ul className={cx(className)}>
      {projects.length > 0 ? (
        projects.map((item) => (
          <TabItem key={item.id} item={item} handleFunc={handleModalOpen} />
        ))
      ) : (
        <li className={cx("ProjectsItem")}>No projects</li>
      )}
      <Modal open={isModalOpen} onClose={handleModalClose}>
        {selectedItem && (
          <div>
            <h2>{selectedItem.title}</h2>
            <p>{selectedItem.description}</p>
            <span>{selectedItem.url}</span>
          </div>
        )}
      </Modal>
    </ul>
  );
}
