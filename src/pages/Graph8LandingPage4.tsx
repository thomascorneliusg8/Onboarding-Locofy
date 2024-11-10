import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import Iconedit from "../components/Iconedit";
import styles from "./Graph8LandingPage4.module.css";

const Graph8LandingPage4: FunctionComponent = () => {
  return (
    <div className={styles.graph8Landingpage}>
      <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.layer1Icon}
          loading="lazy"
          alt=""
          src="/layer-1.svg"
        />
        <div className={styles.frameParent}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>{`Keywords & Topics`}</h1>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.vectorParent}>
                <img
                  className={styles.frameItem}
                  loading="lazy"
                  alt=""
                  src="/line-91.svg"
                />
                <img
                  className={styles.frameInner}
                  loading="lazy"
                  alt=""
                  src="/line-101.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <FrameComponent1
              group813="/group-8131.svg"
              subtitle="Business Data"
              subtitleColor="#a7b2c9"
              subtitleMinWidth="80px"
              group8131="/group-813.svg"
              subtitle1="Keywords"
              subtitleColor1="#a7b2c9"
              subtitleMinWidth1="55px"
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
            <div className={styles.frameDiv}>
              <div className={styles.frameWrapper1}>
                <img
                  className={styles.groupIcon}
                  alt=""
                  src="/group-8131.svg"
                />
              </div>
              <div className={styles.subtitle}>Test</div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangleDiv} />
          <div className={styles.subtitle1}>
            <p
              className={styles.dontStressIf}
            >{`Don’t stress if you need input from your team or do not have the information, all data can be updated later. `}</p>
            <p
              className={styles.simplyClickThrough}
            >{`Simply click through to finalize the initial setup. `}</p>
          </div>
        </div>
      </div>
      <div className={styles.graph8LandingpageInner}>
        <div className={styles.frameParent1}>
          <FrameComponent2 paid="Paid" />
          <div className={styles.frameParent2}>
            <div className={styles.frameWrapper2}>
              <div className={styles.frameParent3}>
                <FrameComponent2
                  frameDivWidth="unset"
                  frameDivFlex="1"
                  frameDivMinWidth="189px"
                  rectangleDivHeight="329px"
                  paid="Organic"
                />
                <div className={styles.rectangleContainer}>
                  <div className={styles.frameChild1} />
                  <div className={styles.frameWrapper3}>
                    <div className={styles.frameParent4}>
                      <div className={styles.topicsWrapper}>
                        <a className={styles.topics}>Topics</a>
                      </div>
                      <Iconedit
                        group926="/group-926-2.svg"
                        iconeditPosition="unset"
                        iconeditTop="unset"
                        iconeditLeft="unset"
                      />
                    </div>
                  </div>
                  <div className={styles.lineWrapper}>
                    <div className={styles.lineDiv} />
                  </div>
                  <div className={styles.marketingAgencyCienceContainer}>
                    <p
                      className={styles.marketingAgency}
                    >{`Marketing agency `}</p>
                    <p className={styles.marketingAgency}>Cience</p>
                    <p className={styles.marketingAgency}>
                      Lead generation companies
                    </p>
                    <p className={styles.marketingAgency}>Sales leads</p>
                    <p className={styles.marketingAgency}>Marketing company</p>
                    <p
                      className={styles.marketingAgency}
                    >{`Appointment setting services `}</p>
                    <p className={styles.simplyClickThrough}>
                      Appointment setting
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.buttonsLCtaNormal}>
              <div className={styles.title1}>Next</div>
              <div className={styles.buttonsLCtaNormalInner}>
                <img className={styles.arrowIcon} alt="" src="/arrow-1.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph8LandingPage4;
