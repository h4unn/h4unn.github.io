import cn from "classnames/bind";
import styles from "./TabList.module.scss";
import { useTabListContext } from "./TabList";

const cx = cn.bind(styles);

interface TabListProps {
  className?: string;
  children: React.ReactNode;
}

export default function TabButton({
  className = "TabListButton",
  children,
}: TabListProps) {
  const { selectedTab, setSelectedTab } = useTabListContext();
  function handleClick() {
    setSelectedTab(children as string);
  }

  return (
    <>
      <button
        className={cx(
          className,
          (children as string) === selectedTab && "active"
        )}
        onClick={handleClick}
      >
        {children}
      </button>
    </>
  );
}
