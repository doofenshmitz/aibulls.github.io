import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Component from "../components/Component";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./Utility.module.css";

const Utility: FunctionComponent = () => {
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

  return (
    <div className={styles.utility}>
      <Component
        onGroupContainerClick={onGroupContainerClick}
        onGroupContainer2Click={onGroupContainer2Click}
        onABOUTTextClick={onABOUTTextClick}
        onUtilityTextClick={onUtilityTextClick}
        onOVerviewTextClick={onOVerviewTextClick}
        onTEAMTextClick={onTEAMTextClick}
      />
      <section className={styles.utilityInner}>
        <div className={styles.aaaUtilityParent}>
          <h1 className={styles.aaaUtility}>AAA Utility</h1>
          <FrameComponent1 />
        </div>
      </section>
    </div>
  );
};

export default Utility;
