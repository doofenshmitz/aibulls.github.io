import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Component from "../components/Component";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
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

  const onTEAMTextClick = useCallback(() => {
    navigate("/team");
  }, [navigate]);

  const onFrameClick = useCallback(() => {
    navigate("/team");
  }, [navigate]);

  const onFrame1Click = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <Component
        onGroupContainerClick={onGroupContainerClick}
        onGroupContainer2Click={onGroupContainer2Click}
        onABOUTTextClick={onABOUTTextClick}
        onUtilityTextClick={onUtilityTextClick}
        onOVerviewTextClick={onOVerviewTextClick}
        onTEAMTextClick={onTEAMTextClick}
      />
      <main className={styles.homeInner}>
        <section className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.lineParent}>
              <div className={styles.frameChild} />
              <img className={styles.frameItem} alt="" />
              <div className={styles.frameGroup}>
                <div className={styles.aiParent}>
                  <h1 className={styles.ai}>AI</h1>
                  <h1 className={styles.bulls}>Bulls</h1>
                </div>
                <div className={styles.frameContainer}>
                  <img
                    className={styles.frameInner}
                    loading="lazy"
                    alt=""
                    src="/frame-9.svg"
                    onClick={onFrameClick}
                  />
                  <img
                    className={styles.frameIcon}
                    loading="lazy"
                    alt=""
                    src="/frame-8.svg"
                    onClick={onFrame1Click}
                  />
                </div>
                <div className={styles.launchingParent}>
                  <h1 className={styles.launching}>Launching</h1>
                  <h1 className={styles.soon}>Soon</h1>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle-6@2x.png"
            />
            <button className={styles.rectangleGroup}>
              <div
                className={styles.instanceChild}
                onClick={onRectangleClick}
              />
              <div className={styles.groupDiv}>
                <div className={styles.stompAheadWrapper}>
                  <div className={styles.stompAhead}>STOMP Ahead</div>
                </div>
                <img
                  className={styles.arrow2RightLongIcon}
                  alt=""
                  src="/arrow2rightlong.svg"
                />
              </div>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
