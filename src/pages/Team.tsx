import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Component from "../components/Component";
import styles from "./Team.module.css";

const Team: FunctionComponent = () => {
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

  const onRectangle2Click = useCallback(() => {
    window.open("https://discord.gg/pzwzsrYtaj");
  }, []);

  const onRectangle22Click = useCallback(() => {
    window.open("https://t.me/Cato005");
  }, []);

  const onRectangle23Click = useCallback(() => {
    window.open("https://twitter.com/Bullionaire69");
  }, []);

  return (
    <div className={styles.team}>
      <Component
        onGroupContainerClick={onGroupContainerClick}
        onGroupContainer2Click={onGroupContainer2Click}
        onABOUTTextClick={onABOUTTextClick}
        onUtilityTextClick={onUtilityTextClick}
        onOVerviewTextClick={onOVerviewTextClick}
        onTEAMTextClick={onTEAMTextClick}
      />
      <main className={styles.teamInner}>
        <section className={styles.frameParent}>
          <div className={styles.ourParent}>
            <h1 className={styles.our}>Our</h1>
            <div className={styles.teamWrapper}>
              <h1 className={styles.team1}>Team</h1>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.frameItem} />
              <img
                className={styles.image30Icon}
                loading="lazy"
                alt=""
                src="/image-30@2x.png"
              />
              <h1 className={styles.limo}>Limo</h1>
              <div className={styles.frameInner} onClick={onRectangle2Click} />
              <div className={styles.teamAndCompany}>
                <div className={styles.sleepsOnDustContainer}>
                  <p className={styles.sleepsOnDust}>
                    Sleeps on dust, dabbles in rust
                  </p>
                  <p className={styles.softspokenSolidityDev}>
                    Softspoken solidity dev
                  </p>
                </div>
                <div className={styles.socialMediaLinks}>
                  <div className={styles.discordTelegramParent}>
                    <div className={styles.discordTelegram}>
                      <div className={styles.discord}>Discord</div>
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
            <div className={styles.rectangleGroup}>
              <div className={styles.rectangleDiv} />
              <div className={styles.frameChild1} />
              <img
                className={styles.image30Icon1}
                alt=""
                src="/image-30-1@2x.png"
              />
              <div className={styles.cato005}>Cato005</div>
              <div
                className={styles.frameChild2}
                onClick={onRectangle22Click}
              />
              <div className={styles.theElderInTheTeamLivesByParent}>
                <div className={styles.theElderInContainer}>
                  <p className={styles.theElderIn}>The elder in the team</p>
                  <p className={styles.livesByThe}>
                    Lives by the shakespearean philosphy to err is to human, to
                    all in erc20 project made yesterday degen
                  </p>
                  <p className={styles.realMadridPlastic}>
                    Real Madrid Plastic Fan
                  </p>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.frameContainer}>
                    <div className={styles.telegramWrapper}>
                      <div className={styles.telegram}>TELEGRAM</div>
                    </div>
                    <img
                      className={styles.arrow2RightLongIcon1}
                      alt=""
                      src="/arrow2rightlong.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameChild3} />
              <div className={styles.frameChild4} />
              <img
                className={styles.image30Icon2}
                alt=""
                src="/image-30-2@2x.png"
              />
              <div
                className={styles.frameChild5}
                onClick={onRectangle23Click}
              />
              <div className={styles.frameDiv}>
                <div className={styles.frameParent1}>
                  <div className={styles.bullionaireWrapper}>
                    <h1 className={styles.bullionaire}>Bullionaire</h1>
                  </div>
                  <div className={styles.limosLovechildWithAZombieParent}>
                    <div className={styles.limosLovechildWithContainer}>
                      <p className={styles.limosLovechildWith}>
                        Limos lovechild with a zombie bull shark
                      </p>
                      <p className={styles.limoYouSick}>
                        Limo you sick mansplainer
                      </p>
                      <p className={styles.solanaBagholder}>Solana Bagholder</p>
                    </div>
                    <div className={styles.frameWrapper1}>
                      <div className={styles.frameParent2}>
                        <div className={styles.twitterWrapper}>
                          <div className={styles.twitter}>Twitter</div>
                        </div>
                        <img
                          className={styles.arrow2RightLongIcon2}
                          alt=""
                          src="/arrow2rightlong.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Team;
