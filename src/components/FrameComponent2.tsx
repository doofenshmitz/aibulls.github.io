import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent2.module.css";

const FrameComponent2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/utility");
  }, [navigate]);

  return (
    <section className={styles.aboutInner}>
      <div className={styles.rectangleParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/rectangle-10@2x.png"
        />
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <img
            className={styles.frameInner}
            loading="lazy"
            alt=""
            src="/rectangle-8@2x.png"
          />
          <div className={styles.rectangleWrapper}>
            <img
              className={styles.rectangleIcon}
              loading="lazy"
              alt=""
              src="/rectangle-9@2x.png"
            />
          </div>
          <div className={styles.aboutParent}>
            <h1 className={styles.about}>About</h1>
            <div className={styles.youMerelyAdaptedContainer}>
              <p className={styles.youMerelyAdapted}>
                You merely adapted AI as a moniker
              </p>
              <p className={styles.aiBullsWere}>
                AI Bulls were born in stable diffusion
              </p>
              <p className={styles.moldedByIt}>Molded by it</p>
              <p className={styles.theyDidntSee}>
                They didn’t see photopea until they were already mutated
              </p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p
                className={styles.aPfpProject}
              >{`A PFP project revolving around `}</p>
              <p className={styles.sharingTheWisdom}>
                sharing the wisdom gained in the years and walking the water
                without fear
              </p>
              <p className={styles.stayHorny}>Stay horny</p>
            </div>
            <div
              className={styles.rectangleContainer}
              onClick={onFrameContainerClick}
            >
              <div className={styles.rectangleDiv} />
              <div className={styles.utilityWrapper}>
                <div className={styles.utility}>UTILITY</div>
              </div>
              <img
                className={styles.arrow2RightLongIcon}
                loading="lazy"
                alt=""
                src="/arrow2rightlong.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
