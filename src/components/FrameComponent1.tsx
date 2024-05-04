import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "./FrameComponent";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/overview");
  }, [navigate]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.parent}>
          <div className={styles.div}>1</div>
          <div className={styles.frameWrapper}>
            <div className={styles.artParent}>
              <h1 className={styles.art}>Art</h1>
              <div className={styles.frameContainer}>
                <div className={styles.beAPartOf7000AgentsTrottParent}>
                  <h2 className={styles.beAPartContainer}>
                    <p className={styles.beAPart}>
                      Be a part of 7000 Agents trotting across the globe
                    </p>
                    <p className={styles.theAiOverlords}>
                      The AI overlords of tomorrow know who not to mess with
                    </p>
                  </h2>
                  <div className={styles.div1}>3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.div2}>2</div>
          <div className={styles.frameDiv}>
            <div className={styles.analysisParent}>
              <h1 className={styles.analysis}>Analysis</h1>
              <div className={styles.weeklyTaeCoinDoOfBestTeaParent}>
                <h2
                  className={styles.weeklyTaeCoinDoOf}
                >{`Weekly tae-coin-do of best teams, projects & ideas in the space`}</h2>
                <div className={styles.frameWrapper1}>
                  <FrameComponent
                    tEAM="Overview"
                    propMinWidth="78px"
                    onRectangleClick={onRectangleClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper2}>
        <div className={styles.altcoinParent}>
          <h1 className={styles.altcoin}>Altcoin</h1>
          <div className={styles.everApedAndLostEverytimeWrapper}>
            <h2 className={styles.everApedAndContainer}>
              <p className={styles.everApedAnd}>Ever aped and lost?</p>
              <p className={styles.everytime}>Everytime?</p>
              <p className={styles.evenInThe}>Even in the bull market?</p>
              <p className={styles.especiallyInThe}>
                Especially in the bull market?
              </p>
              <p className={styles.bullLubeIs}>
                Bull Lube is here to oil your folio
              </p>
              <p className={styles.moreDetailsSoon}>More details soon...</p>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
