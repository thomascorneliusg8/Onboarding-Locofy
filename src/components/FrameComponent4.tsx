import { FunctionComponent } from "react";
import FrameComponent1 from "./FrameComponent1";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Business Data</h1>
      </div>
      <div className={styles.vectorWrapper}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/line-9.svg"
        />
      </div>
      <div className={styles.frameGroup}>
        <FrameComponent1
          group813="/group-813.svg"
          subtitle="Business Data"
          group8131="/group-813.svg"
          subtitle1="Keywords"
        />
        <FrameComponent1
          group813="/group-8131.svg"
          subtitle="Competitors"
          subtitleColor="#424267"
          subtitleMinWidth="70px"
          group8131="/group-8131.svg"
          subtitle1="ICP"
          subtitleColor1="#424267"
          subtitleMinWidth1="18px"
        />
        <div className={styles.standaloneSubtitleContentParent}>
          <div className={styles.standaloneSubtitleContent}>
            <img
              className={styles.standaloneSubtitleContentChild}
              alt=""
              src="/group-8131.svg"
            />
          </div>
          <div className={styles.subtitle}>Test</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
