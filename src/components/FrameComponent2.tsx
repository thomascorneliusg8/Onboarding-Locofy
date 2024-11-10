import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Iconedit from "./Iconedit";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
  paid?: string;

  /** Style props */
  frameDivWidth?: CSSProperties["width"];
  frameDivFlex?: CSSProperties["flex"];
  frameDivMinWidth?: CSSProperties["minWidth"];
  rectangleDivHeight?: CSSProperties["height"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
  frameDivWidth,
  frameDivFlex,
  frameDivMinWidth,
  rectangleDivHeight,
  paid,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
      flex: frameDivFlex,
      minWidth: frameDivMinWidth,
    };
  }, [frameDivWidth, frameDivFlex, frameDivMinWidth]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      height: rectangleDivHeight,
    };
  }, [rectangleDivHeight]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.frameChild} style={rectangleDivStyle} />
      <div className={styles.frameParent}>
        <div className={styles.paidWrapper}>
          <a className={styles.paid}>{paid}</a>
        </div>
        <Iconedit
          group926="/group-9262.svg"
          iconeditPosition="unset"
          iconeditTop="unset"
          iconeditLeft="unset"
        />
      </div>
      <div className={styles.frameItem} />
      <div className={styles.marketingAgencyCienceContainer}>
        <p className={styles.marketingAgency}>{`Marketing agency `}</p>
        <p className={styles.marketingAgency}>Cience</p>
        <p className={styles.marketingAgency}>Lead generation companies</p>
        <p className={styles.marketingAgency}>Sales leads</p>
        <p className={styles.marketingAgency}>Marketing company</p>
        <p
          className={styles.marketingAgency}
        >{`Appointment setting services `}</p>
        <p className={styles.appointmentSetting}>Appointment setting</p>
      </div>
    </div>
  );
};

export default FrameComponent2;
