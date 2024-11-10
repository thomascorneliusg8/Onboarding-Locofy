import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
  group813?: string;
  subtitle?: string;
  group8131?: string;
  subtitle1?: string;

  /** Style props */
  subtitleColor?: CSSProperties["color"];
  subtitleMinWidth?: CSSProperties["minWidth"];
  subtitleColor1?: CSSProperties["color"];
  subtitleMinWidth1?: CSSProperties["minWidth"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  group813,
  subtitle,
  subtitleColor,
  subtitleMinWidth,
  group8131,
  subtitle1,
  subtitleColor1,
  subtitleMinWidth1,
}) => {
  const subtitleStyle: CSSProperties = useMemo(() => {
    return {
      color: subtitleColor,
      minWidth: subtitleMinWidth,
    };
  }, [subtitleColor, subtitleMinWidth]);

  const subtitle1Style: CSSProperties = useMemo(() => {
    return {
      color: subtitleColor1,
      minWidth: subtitleMinWidth1,
    };
  }, [subtitleColor1, subtitleMinWidth1]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.frameWrapper}>
          <img className={styles.frameChild} alt="" src={group813} />
        </div>
        <div className={styles.subtitle} style={subtitleStyle}>
          {subtitle}
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameWrapper}>
          <img className={styles.frameChild} alt="" src={group8131} />
        </div>
        <div className={styles.subtitle1} style={subtitle1Style}>
          {subtitle1}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
