import Typewriter from "typewriter-effect";

import cn from "classnames/bind";
import styles from "./TypeWrite.module.scss";

const cx = cn.bind(styles);

type TypeWriteProps = {
  text: string;
};

export default function TypeWrite(props: TypeWriteProps) {
  const { text } = props;
  return (
    <div className={cx("TypeWrite")}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString(text).pauseFor(999999999).start();
        }}
        options={{
          delay: 80,
        }}
      />
    </div>
  );
}
