import { FunctionComponent } from "react";
import styles from "./IconappSettings.module.css";

export type IconappSettingsType = {
  className?: string;
};

const IconappSettings: FunctionComponent<IconappSettingsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.iconappSettings, className].join(" ")}>
      <img
        className={styles.iconappSettingsChild}
        alt=""
        src="/group-1175@2x.png"
      />
    </div>
  );
};

export default IconappSettings;
