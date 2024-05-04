import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Component from "../components/Component";
import FrameComponent from "../components/FrameComponent";
import styles from "./Overview.module.css";

const Overview: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onABOUTTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onUtilityTextClick = useCallback(() => {
    navigate("/utility");
  }, [navigate]);

  const onOVerviewTextClick = useCallback(() => {
    navigate("/overview");
  }, [navigate]);

  const onTEAMText1Click = useCallback(() => {
    navigate("/team");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/team");
  }, [navigate]);

  return (
    <div className={styles.overview}>
      <Component
        onGroupContainerClick={onGroupContainerClick}
        onGroupContainer2Click={onGroupContainer2Click}
        onABOUTTextClick={onABOUTTextClick}
        onUtilityTextClick={onUtilityTextClick}
        onOVerviewTextClick={onOVerviewTextClick}
        onTEAMTextClick={onTEAMText1Click}
      />
      <section className={styles.overviewInner}>
        <div className={styles.overviewParent}>
          <h1 className={styles.overview1}>Overview</h1>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.rectangleParent}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/rectangle-12@2x.png"
                  />
                  <img
                    className={styles.frameItem}
                    loading="lazy"
                    alt=""
                    src="/rectangle-17.svg"
                  />
                </div>
                <b className={styles.bulls}>7000 bulls</b>
              </div>
              <div className={styles.image15Parent}>
                <img
                  className={styles.image15Icon}
                  alt=""
                  src="/image-15@2x.png"
                />
                <h1 className={styles.milCombinations}>
                  <p className={styles.mil}>100mil+</p>
                  <p className={styles.combinations}>combinations</p>
                </h1>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.rectangleGroup}>
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="/rectangle-16@2x.png"
                  />
                  <img
                    className={styles.image16Icon}
                    loading="lazy"
                    alt=""
                    src="/image-16@2x.png"
                  />
                </div>
                <b className={styles.erc721a}>ERC721A</b>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.rectangleContainer}>
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle-15@2x.png"
                  />
                  <img
                    className={styles.image17Icon}
                    loading="lazy"
                    alt=""
                    src="/image-17@2x.png"
                  />
                </div>
                <h1 className={styles.coolFunkyArt}>Cool Funky Art</h1>
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.frameParent4}>
                  <div className={styles.rectangleParent1}>
                    <img
                      className={styles.frameChild1}
                      alt=""
                      src="/rectangle-14@2x.png"
                    />
                    <img
                      className={styles.image18Icon}
                      loading="lazy"
                      alt=""
                      src="/image-18@2x.png"
                    />
                  </div>
                  <b className={styles.eth}>0.007 eth</b>
                </div>
                <FrameComponent
                  tEAM="TEAM"
                  onRectangleClick={onRectangleClick}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
