import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  tEAM?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];

  /** Action props */
  onRectangleClick?: () => void;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  tEAM,
  propMinWidth,
  onRectangleClick,
}) => {
  const tEAMStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <button className={styles.rectangleParent}>
      <div className={styles.frameChild} onClick={onRectangleClick} />
      <div className={styles.teamWrapper}>
        <div className={styles.team} style={tEAMStyle}>
          {tEAM}
        </div>
      </div>
      <img
        className={styles.arrow2RightLongIcon}
        alt=""
        src="/arrow2rightlong1.svg"
      />
    </button>
  );
};

export default FrameComponent;
