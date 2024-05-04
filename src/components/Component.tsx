import { FunctionComponent } from "react";
import styles from "./Component.module.css";

export type ComponentType = {
  /** Action props */
  onGroupContainerClick?: () => void;
  onGroupContainer2Click?: () => void;
  onABOUTTextClick?: () => void;
  onUtilityTextClick?: () => void;
  onOVerviewTextClick?: () => void;
  onTEAMTextClick?: () => void;
};

const Component: FunctionComponent<ComponentType> = ({
  onGroupContainerClick,
  onGroupContainer2Click,
  onABOUTTextClick,
  onUtilityTextClick,
  onOVerviewTextClick,
  onTEAMTextClick,
}) => {
  return (
    <header className={styles.component1}>
      <div className={styles.component1Child} />
      <div className={styles.frameParent} onClick={onGroupContainerClick}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/group-11.svg"
        />
        <h1 className={styles.bulls}>BULLS</h1>
      </div>
      <div className={styles.component1Inner}>
        <div
          className={styles.rectangleParent}
          onClick={onGroupContainer2Click}
        >
          <div className={styles.frameItem} />
          <div className={styles.mainWrapper}>
            <div className={styles.main}>Main</div>
          </div>
          <div className={styles.frameInner} />
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.aboutParent}>
          <div className={styles.about} onClick={onABOUTTextClick}>
            ABOUT
          </div>
          <div className={styles.utility} onClick={onUtilityTextClick}>
            Utility
          </div>
        </div>
      </div>
      <div className={styles.overviewWrapper}>
        <div className={styles.overview} onClick={onOVerviewTextClick}>
          OVerview
        </div>
      </div>
      <div className={styles.teamWrapper}>
        <div className={styles.team} onClick={onTEAMTextClick}>
          TEAM
        </div>
      </div>
    </header>
  );
};

export default Component;
