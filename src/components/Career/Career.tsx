import cn from "classnames/bind";
import styles from "./Career.module.scss";

import type { Career } from "../../types/career.type";

const cx = cn.bind(styles);

export default function Career({ data }: { data: Career[] }) {
  return (
    <ul className={cx("Career")}>
      {data.map((item, index) => (
        <li key={index} className={cx("CareerItem")}>
          <div className={cx("CareerCompany")}>
            <span>
              {item.startDate} ~ {item.endDate}
            </span>
            <em>{item.company}</em>
          </div>
          <div className={cx("CareerContent")}>
            <p className={cx("CareerPosition")}>{item.position}</p>
            <p className={cx("CarrerDescription")}>{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
