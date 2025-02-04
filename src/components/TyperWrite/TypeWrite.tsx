import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

import cn from "classnames/bind";
import styles from "./TypeWrite.module.scss";

const cx = cn.bind(styles);

type TypeWriteProps = {
  text: string;
  delay?: number;
  cursor?: string;
};

export default function TypeWrite(props: TypeWriteProps) {
  const { text, delay, cursor } = props;
  return (
    <motion.div className={cx("TypeWrite")}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(text)
            .pauseFor(delay || 999999999)
            .start();
        }}
        options={{
          delay: 40,
          loop: delay ? true : false,
          cursor: cursor || "|",
        }}
      />
    </motion.div>
  );
}
