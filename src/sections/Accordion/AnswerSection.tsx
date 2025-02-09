import cn from "classnames/bind";
import styles from "./AnswerSection.module.scss";

import Accordion from "../../components/Accordion/Accordion";

const cx = cn.bind(styles);

export default function AnswerSection() {
  return (
    <>
      <Accordion>
        <Accordion.Item id="question1" className={cx("test")}>
          <Accordion.Title>Question 1</Accordion.Title>
          <Accordion.Content>
            <p>Answer 1</p>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
