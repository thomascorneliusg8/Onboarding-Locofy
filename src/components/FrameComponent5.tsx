import { FunctionComponent } from "react";
import FrameComponent1 from "./FrameComponent1";
import styles from "./FrameComponent5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameContainer}>
          <div className={styles.vectorParent}>
            <img className={styles.frameChild} alt="" src="/line-91.svg" />
            <img className={styles.frameItem} alt="" src="/line-102.svg" />
          </div>
        </div>
      </div>
      <FrameComponent1
        group813="/group-813.svg"
        subtitle="Business Data"
        subtitleColor="#a7b2c9"
        subtitleMinWidth="80px"
        group8131="/group-813.svg"
        subtitle1="Keywords"
        subtitleColor1="#a7b2c9"
        subtitleMinWidth1="55px"
      />
      <FrameComponent1
        group813="/group-813.svg"
        subtitle="Competitors"
        subtitleColor="#a7b2c9"
        subtitleMinWidth="70px"
        group8131="/group-813.svg"
        subtitle1="ICP"
        subtitleColor1="#a7b2c9"
        subtitleMinWidth1="18px"
      />
      <div className={styles.frameGroup}>
        <div className={styles.frameDiv}>
          <img className={styles.frameInner} alt="" src="/group-8131.svg" />
        </div>
        <div className={styles.subtitle}>Test</div>
      </div>
    </div>
  );
};

export default FrameComponent5;
