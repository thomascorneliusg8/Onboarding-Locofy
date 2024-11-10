import { FunctionComponent } from "react";
import styles from "./Iconcontacts.module.css";

export type IconcontactsType = {
  className?: string;
};

const Iconcontacts: FunctionComponent<IconcontactsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.iconcontacts, className].join(" ")}>
      <img className={styles.iconcontactsChild} alt="" src="/group-1126.svg" />
    </div>
  );
};

export default Iconcontacts;
