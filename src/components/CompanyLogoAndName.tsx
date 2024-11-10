import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Iconedit from "./Iconedit";
import styles from "./CompanyLogoAndName.module.css";

export type CompanyLogoAndNameType = {
  className?: string;
  company?: string;
  companyName?: string;

  /** Style props */
  companyTextDecoration?: CSSProperties["textDecoration"];
  companyNameWidth?: CSSProperties["width"];
};

const CompanyLogoAndName: FunctionComponent<CompanyLogoAndNameType> = ({
  className = "",
  company,
  companyTextDecoration,
  companyName,
  companyNameWidth,
}) => {
  const companyStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: companyTextDecoration,
    };
  }, [companyTextDecoration]);

  const companyNameStyle: CSSProperties = useMemo(() => {
    return {
      width: companyNameWidth,
    };
  }, [companyNameWidth]);

  return (
    <div className={[styles.companyLogoAndName, className].join(" ")}>
      <div className={styles.companyLogoWrapper}>
        <div className={styles.logoIconPair}>
          <div className={styles.companyLogo}>
            <a className={styles.company} style={companyStyle}>
              {company}
            </a>
          </div>
          <Iconedit group926="/group-926.svg" />
        </div>
      </div>
      <div className={styles.companyLogoAndNameChild} />
      <div className={styles.companyName} style={companyNameStyle}>
        {companyName}
      </div>
    </div>
  );
};

export default CompanyLogoAndName;
