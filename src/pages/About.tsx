import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Component from "../components/Component";
import FrameComponent2 from "../components/FrameComponent2";
import styles from "./About.module.css";

const About: FunctionComponent = () => {
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
    <div className={styles.about}>
      <Component
        onGroupContainerClick={onGroupContainerClick}
        onGroupContainer2Click={onGroupContainer2Click}
        onABOUTTextClick={onABOUTTextClick}
        onUtilityTextClick={onUtilityTextClick}
        onOVerviewTextClick={onOVerviewTextClick}
        onTEAMTextClick={onTEAMTextClick}
      />
      <FrameComponent2 />
    </div>
  );
};

export default About;
