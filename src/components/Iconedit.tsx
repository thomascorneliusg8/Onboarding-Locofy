import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Iconedit.module.css";

export type IconeditType = {
  className?: string;
  group926?: string;

  /** Style props */
  iconeditPosition?: CSSProperties["position"];
  iconeditTop?: CSSProperties["top"];
  iconeditLeft?: CSSProperties["left"];
};

const Iconedit: FunctionComponent<IconeditType> = ({
  className = "",
  group926,
  iconeditPosition,
  iconeditTop,
  iconeditLeft,
}) => {
  const iconeditStyle: CSSProperties = useMemo(() => {
    return {
      position: iconeditPosition,
      top: iconeditTop,
      left: iconeditLeft,
    };
  }, [iconeditPosition, iconeditTop, iconeditLeft]);

  return (
    <div
      className={[styles.iconedit, className].join(" ")}
      style={iconeditStyle}
    >
      <img
        className={styles.iconeditChild}
        loading="lazy"
        alt=""
        src={group926}
      />
    </div>
  );
};

export default Iconedit;
