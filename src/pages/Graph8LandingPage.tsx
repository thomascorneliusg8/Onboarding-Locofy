import { FunctionComponent, useCallback } from "react";
import FrameComponent5 from "../components/FrameComponent5";
import IconappSettings from "../components/IconappSettings";
import Iconcontacts from "../components/Iconcontacts";
import ContactSearch from "../components/ContactSearch";
import styles from "./Graph8LandingPage.module.css";

const Graph8LandingPage: FunctionComponent = () => {
  const onAccordionHeaderClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const element = event.target as HTMLElement;

      const accItem: HTMLElement =
        element.closest("[data-acc-item]") || element;
      const accContent = accItem.querySelector(
        "[data-acc-content]"
      ) as HTMLElement;
      const isOpen = accItem.hasAttribute("data-acc-open");
      const nextOuterSibling =
        accItem?.nextElementSibling ||
        (accItem?.parentElement?.nextElementSibling as HTMLElement);
      const prevOuterSibling =
        accItem?.previousElementSibling ||
        (accItem?.parentElement?.previousElementSibling as HTMLElement);
      const siblingContainerAccItem = accItem?.hasAttribute("data-acc-original")
        ? accItem?.nextElementSibling ||
          nextOuterSibling?.querySelector("[data-acc-item]") ||
          nextOuterSibling
        : accItem?.previousElementSibling ||
          prevOuterSibling?.querySelector("[data-acc-item]") ||
          prevOuterSibling;
      const siblingAccItem =
        (siblingContainerAccItem?.querySelector(
          "[data-acc-item]"
        ) as HTMLElement) || siblingContainerAccItem;

      if (!siblingAccItem) return;
      const originalDisplay = "flex";
      const siblingDisplay = "flex";

      const openStyleObject = {
        "grid-template-rows": "1fr",
      };
      const closeStyleObject = {
        "padding-top": "0px",
        "padding-bottom": "0px",
        "margin-bottom": "0px",
        "margin-top": "0px",
        "grid-template-rows": "0fr",
      };

      function applyStyles(
        element: HTMLElement,
        styleObject: Record<string, string>
      ) {
        Object.assign(element.style, styleObject);
      }

      function removeStyles(
        element: HTMLElement,
        styleObject: Record<string, string>
      ) {
        Object.keys(styleObject).forEach((key) => {
          element?.style.removeProperty(key);
        });
      }

      if (isOpen) {
        removeStyles(accContent, openStyleObject);
        applyStyles(accContent, closeStyleObject);

        setTimeout(() => {
          if (accItem) {
            accItem.style.display = "none";
            siblingAccItem.style.display = siblingDisplay;
          }
        }, 100);
      } else {
        if (accItem) {
          accItem.style.display = "none";
          siblingAccItem.style.display = originalDisplay;
        }
        const siblingAccContent = siblingAccItem?.querySelector(
          "[data-acc-content]"
        ) as HTMLElement;
        setTimeout(() => {
          removeStyles(siblingAccContent, closeStyleObject);
          applyStyles(siblingAccContent, openStyleObject);
        }, 1);
      }
    },
    []
  );

  return (
    <div className={styles.graph8Landingpage}>
      <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.layer1Icon}
          loading="lazy"
          alt=""
          src="/layer-11.svg"
        />
        <div className={styles.titleParent}>
          <h1 className={styles.title}>ICP</h1>
          <FrameComponent5 />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.subtitle}>
            <p
              className={styles.dontStressIf}
            >{`Don’t stress if you need input from your team or do not have the information, all data can be updated later. `}</p>
            <p
              className={styles.simplyClickThrough}
            >{`Simply click through to finalize the initial setup. `}</p>
          </div>
        </div>
      </div>
      <div className={styles.filtersContainerWrapper}>
        <div className={styles.filtersContainer}>
          <div className={styles.filtersRow}>
            <div className={styles.filters}>
              <div className={styles.filterIcons}>
                <IconappSettings />
                <div className={styles.accountsFilter}>
                  <a className={styles.hideFilters}>Hide Filters</a>
                </div>
              </div>
              <div className={styles.filterIcons1}>
                <div className={styles.audiencesWrapper}>
                  <img
                    className={styles.audiencesIcon}
                    alt=""
                    src="/audiences.svg"
                  />
                </div>
                <a className={styles.hideFilters}>11,420 Accounts</a>
              </div>
              <div className={styles.filterIcons2}>
                <Iconcontacts />
                <div className={styles.accountsFilter}>
                  <a className={styles.hideFilters}>11,420 Contacts</a>
                </div>
              </div>
            </div>
            <div className={styles.searchFields}>
              <div className={styles.companyCityField}>
                <div className={styles.companyCityFieldChild} />
                <div className={styles.modifyCityField}>
                  <a className={styles.companyCity}>Company City</a>
                  <div className={styles.cityInputParent}>
                    <div className={styles.cityInput}>
                      <img
                        className={styles.fieldIcon}
                        loading="lazy"
                        alt=""
                        src="/field.svg"
                      />
                      <div className={styles.florida}>Florida</div>
                      <div className={styles.x}>x</div>
                    </div>
                    <div className={styles.cityDropdown}>
                      <div className={styles.arrowParent}>
                        <img
                          className={styles.arrowIcon}
                          loading="lazy"
                          alt=""
                          src="/arrow.svg"
                        />
                        <img
                          className={styles.dividerIcon}
                          loading="lazy"
                          alt=""
                          src="/divider.svg"
                        />
                      </div>
                    </div>
                    <img
                      className={styles.fieldIcon1}
                      alt=""
                      src="/field1.svg"
                    />
                  </div>
                </div>
                <div className={styles.modifyCityField}>
                  <div className={styles.seniorityLevel}>Seniority Level</div>
                  <div className={styles.companyInputParent}>
                    <div className={styles.companyInput}>
                      <div className={styles.companyDropdown}>
                        <div className={styles.ownerInput}>
                          <img
                            className={styles.fieldIcon2}
                            loading="lazy"
                            alt=""
                            src="/field.svg"
                          />
                          <div className={styles.owner}>Owner</div>
                        </div>
                      </div>
                      <div className={styles.clearCompany}>
                        <div className={styles.x1}>x</div>
                      </div>
                      <div className={styles.partnerInput}>
                        <img
                          className={styles.fieldIcon3}
                          loading="lazy"
                          alt=""
                          src="/field.svg"
                        />
                        <div className={styles.owner}>Partner</div>
                      </div>
                      <div className={styles.clearPartner}>
                        <div className={styles.x1}>x</div>
                      </div>
                    </div>
                    <div className={styles.cityDropdown}>
                      <div className={styles.arrowParent}>
                        <img
                          className={styles.arrowIcon}
                          alt=""
                          src="/arrow.svg"
                        />
                        <img
                          className={styles.dividerIcon}
                          alt=""
                          src="/divider.svg"
                        />
                      </div>
                    </div>
                    <img
                      className={styles.fieldIcon1}
                      alt=""
                      src="/field1.svg"
                    />
                  </div>
                </div>
                <div className={styles.modifyCityField}>
                  <div className={styles.seniorityLevel}>Industry</div>
                  <div className={styles.tagListParent}>
                    <div className={styles.tagList}>
                      <div className={styles.fieldParent}>
                        <img
                          className={styles.fieldIcon5}
                          alt=""
                          src="/field2.svg"
                        />
                        <div
                          className={styles.owner}
                        >{`Computer & Network Security`}</div>
                        <div className={styles.clearTag}>
                          <div className={styles.x1}>x</div>
                        </div>
                      </div>
                      <div className={styles.fieldGroup}>
                        <img
                          className={styles.fieldIcon6}
                          alt=""
                          src="/field3.svg"
                        />
                        <div className={styles.owner}>Computer Hardware</div>
                        <div className={styles.clearPartner}>
                          <div className={styles.x1}>x</div>
                        </div>
                      </div>
                      <div className={styles.fieldContainer}>
                        <img
                          className={styles.fieldIcon7}
                          alt=""
                          src="/field4.svg"
                        />
                        <div className={styles.owner}>Computer Networking</div>
                        <div className={styles.clearPartner}>
                          <div className={styles.x1}>x</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameContainer}>
                      <div className={styles.dividerParent}>
                        <img
                          className={styles.dividerIcon2}
                          alt=""
                          src="/divider-2.svg"
                        />
                        <div className={styles.arrowWrapper}>
                          <img
                            className={styles.arrowIcon2}
                            alt=""
                            src="/arrow.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      className={styles.fieldIcon8}
                      alt=""
                      src="/field5.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.companyCityField1}>
                <div className={styles.companyCityFieldItem} />
                <div className={styles.frameParent}>
                  <div className={styles.modifyWrapper}>
                    <a className={styles.modify}>Modify</a>
                  </div>
                  <div className={styles.bt}>
                    <div className={styles.runSearch}>Run Search</div>
                  </div>
                </div>
                <div className={styles.contactSearchParent} data-acc-group>
                  <ContactSearch
                    group2555="/group-2555.svg"
                    propWidth="15px"
                    contactSearch="Contact Search"
                  />
                  <div
                    className={styles.accordionItemMock}
                    data-acc-item
                    data-acc-open
                  >
                    <div
                      className={styles.contactSearchOpen}
                      data-acc-header
                      onClick={onAccordionHeaderClick}
                    >
                      <div className={styles.contactSearchOpenChild} />
                      <div className={styles.btParent}>
                        <div className={styles.bt1}>
                          <img
                            className={styles.btChild}
                            loading="lazy"
                            alt=""
                            src="/group-2555.svg"
                          />
                        </div>
                        <div className={styles.contactSearchWrapper}>
                          <div className={styles.contactSearch}>
                            Contact Search
                          </div>
                        </div>
                      </div>
                      <div className={styles.contactSearchOpenInner}>
                        <img
                          className={styles.frameInner}
                          loading="lazy"
                          alt=""
                          src="/group-2714.svg"
                        />
                      </div>
                      <div className={styles.accordionContent} />
                    </div>
                    <div className={styles.accordionContent1} data-acc-content>
                      <div className={styles.accordionContentWrap}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </div>
                    </div>
                  </div>
                  <ContactSearch
                    group2555="/group-2764.svg"
                    propWidth="15px"
                    contactSearch="Company Search"
                  />
                  <div
                    className={styles.accordionItemMock}
                    data-acc-item
                    data-acc-open
                  >
                    <div
                      className={styles.contactSearchOpen}
                      data-acc-header
                      onClick={onAccordionHeaderClick}
                    >
                      <div className={styles.contactSearchOpenChild} />
                      <div className={styles.btParent}>
                        <div className={styles.bt1}>
                          <img
                            className={styles.btChild}
                            loading="lazy"
                            alt=""
                            src="/group-2555.svg"
                          />
                        </div>
                        <div className={styles.contactSearchWrapper}>
                          <div className={styles.contactSearch}>
                            Company Search
                          </div>
                        </div>
                      </div>
                      <div className={styles.contactSearchOpenInner}>
                        <img
                          className={styles.frameInner}
                          loading="lazy"
                          alt=""
                          src="/group-2714.svg"
                        />
                      </div>
                      <div className={styles.accordionContent} />
                    </div>
                    <div className={styles.accordionContent1} data-acc-content>
                      <div className={styles.accordionContentWrap}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </div>
                    </div>
                  </div>
                  <ContactSearch
                    group2555="/vector.svg"
                    propWidth="11.5px"
                    contactSearch="Locations"
                  />
                  <div
                    className={styles.accordionItemMock}
                    data-acc-item
                    data-acc-open
                  >
                    <div
                      className={styles.contactSearchOpen}
                      data-acc-header
                      onClick={onAccordionHeaderClick}
                    >
                      <div className={styles.contactSearchOpenChild} />
                      <div className={styles.btParent}>
                        <div className={styles.bt1}>
                          <img
                            className={styles.btChild}
                            loading="lazy"
                            alt=""
                            src="/group-2555.svg"
                          />
                        </div>
                        <div className={styles.contactSearchWrapper}>
                          <div className={styles.contactSearch}>Locations</div>
                        </div>
                      </div>
                      <div className={styles.contactSearchOpenInner}>
                        <img
                          className={styles.frameInner}
                          loading="lazy"
                          alt=""
                          src="/group-2714.svg"
                        />
                      </div>
                      <div className={styles.accordionContent} />
                    </div>
                    <div className={styles.accordionContent1} data-acc-content>
                      <div className={styles.accordionContentWrap}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </div>
                    </div>
                  </div>
                  <ContactSearch
                    group2555="/group-921.svg"
                    propWidth="16.7px"
                    contactSearch="Tech Stack"
                  />
                  <div
                    className={styles.accordionItemMock}
                    data-acc-item
                    data-acc-open
                  >
                    <div
                      className={styles.contactSearchOpen}
                      data-acc-header
                      onClick={onAccordionHeaderClick}
                    >
                      <div className={styles.contactSearchOpenChild} />
                      <div className={styles.btParent}>
                        <div className={styles.bt1}>
                          <img
                            className={styles.btChild}
                            loading="lazy"
                            alt=""
                            src="/group-2555.svg"
                          />
                        </div>
                        <div className={styles.contactSearchWrapper}>
                          <div className={styles.contactSearch}>Tech Stack</div>
                        </div>
                      </div>
                      <div className={styles.contactSearchOpenInner}>
                        <img
                          className={styles.frameInner}
                          loading="lazy"
                          alt=""
                          src="/group-2714.svg"
                        />
                      </div>
                      <div className={styles.accordionContent} />
                    </div>
                    <div className={styles.accordionContent1} data-acc-content>
                      <div className={styles.accordionContentWrap}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameChild3} />
              <div className={styles.companyDetails}>
                <div className={styles.companyName}>
                  <div className={styles.name}>NAME</div>
                  <div className={styles.titleWrapper}>
                    <div className={styles.name}>TITLE</div>
                  </div>
                  <div className={styles.company}>COMPANY</div>
                </div>
              </div>
              <div className={styles.teamProfiles}>
                <div className={styles.teamMember}>
                  <div className={styles.teamMemberChild} />
                  <div className={styles.memberName}>
                    <div className={styles.giseleLeles}>Gisele Leles</div>
                  </div>
                  <div className={styles.memberIcon}>
                    <div className={styles.iconBackground}>
                      <img
                        className={styles.iconBackgroundChild}
                        loading="lazy"
                        alt=""
                        src="/group-3709.svg"
                      />
                    </div>
                    <img
                      className={styles.positionIcon}
                      loading="lazy"
                      alt=""
                      src="/vector-67.svg"
                    />
                    <div className={styles.memberName}>
                      <div className={styles.digitalMarketingManager}>
                        Digital Marketing Manager
                      </div>
                    </div>
                  </div>
                  <div className={styles.memberPhoto}>
                    <div className={styles.dividerParent}>
                      <div className={styles.groupDiv}>
                        <div className={styles.frameChild4} />
                        <img
                          className={styles.image1Icon}
                          loading="lazy"
                          alt=""
                          src="/image-1@2x.png"
                        />
                      </div>
                      <div className={styles.emptyCircle}>
                        <img
                          className={styles.emptyCircleChild}
                          loading="lazy"
                          alt=""
                          src="/group-3712.svg"
                        />
                      </div>
                      <div className={styles.previousCompany}>
                        <div className={styles.giseleLeles}>LatinMade</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.teamMember1}>
                  <div className={styles.teamMemberChild} />
                  <div className={styles.memberName}>
                    <div className={styles.giseleLeles}>Stan McLaughiin</div>
                  </div>
                  <div className={styles.frameParent1}>
                    <div className={styles.iconBackground}>
                      <img
                        className={styles.iconBackgroundChild}
                        loading="lazy"
                        alt=""
                        src="/group-3710.svg"
                      />
                    </div>
                    <img
                      className={styles.positionIcon}
                      loading="lazy"
                      alt=""
                      src="/vector-67.svg"
                    />
                    <div className={styles.memberName}>
                      <div className={styles.giseleLeles}>
                        Member, Board of Directors
                      </div>
                    </div>
                  </div>
                  <div className={styles.memberPhoto}>
                    <div className={styles.frameParent2}>
                      <div className={styles.frameWrapper2}>
                        <div className={styles.rectangleParent1}>
                          <div className={styles.frameChild4} />
                          <img
                            className={styles.image2Icon}
                            loading="lazy"
                            alt=""
                            src="/image-2@2x.png"
                          />
                        </div>
                      </div>
                      <div className={styles.frameWrapper3}>
                        <img
                          className={styles.emptyCircleChild}
                          loading="lazy"
                          alt=""
                          src="/group-3712.svg"
                        />
                      </div>
                      <div className={styles.previousCompany}>
                        <div className={styles.giseleLeles}>SmartSource3</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.teamMember2}>
                  <div className={styles.teamMemberChild} />
                  <div className={styles.memberName}>
                    <div className={styles.giseleLeles}>Kelly Solesbee</div>
                  </div>
                  <div className={styles.frameParent3}>
                    <div className={styles.iconBackground}>
                      <img
                        className={styles.iconBackgroundChild}
                        loading="lazy"
                        alt=""
                        src="/group-3710.svg"
                      />
                    </div>
                    <img
                      className={styles.positionIcon}
                      loading="lazy"
                      alt=""
                      src="/vector-67.svg"
                    />
                    <div className={styles.memberName}>
                      <div className={styles.giseleLeles}>
                        Marketing Director
                      </div>
                    </div>
                  </div>
                  <div className={styles.memberPhoto}>
                    <div className={styles.frameParent4}>
                      <div className={styles.frameWrapper2}>
                        <div className={styles.rectangleParent1}>
                          <div className={styles.frameChild4} />
                          <img
                            className={styles.image3Icon}
                            loading="lazy"
                            alt=""
                            src="/image-3@2x.png"
                          />
                        </div>
                      </div>
                      <div className={styles.frameWrapper3}>
                        <img
                          className={styles.emptyCircleChild}
                          loading="lazy"
                          alt=""
                          src="/group-3712.svg"
                        />
                      </div>
                      <div className={styles.previousCompany}>
                        <div className={styles.gap}>GAP</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.buttonsLCtaNormal}>
              <div className={styles.title2}>Next</div>
              <div className={styles.buttonsLCtaNormalInner}>
                <img
                  className={styles.frameChild12}
                  alt=""
                  src="/arrow-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph8LandingPage;
