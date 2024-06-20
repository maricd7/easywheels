import React from "react";
import styles from "./HowItWorks.module.css";
import { Heading } from "../common/Heading";
import { Paragraph } from "../common/Paragraph";
import { Step } from "../Step";

const HowItWorks = () => {
  return (
    <section className={styles.howItWorksSection}>
      <div className={styles.howItWorksMainTxt}>
        <Heading text="How It Works" />
        <Paragraph text="Follow 3 simple steps." />
      </div>
      <div className={styles.stepsContainer}>
        <Step
          icon="fa-solid:map-marked-alt"
          textMain="Choose Location"
          textSub="Choose Location to pickup your car."
        />
        <Step
          icon="fa-solid:calendar-alt"
          textMain="Choose Location"
          textSub="Choose Location to pickup your car."
        />
        <Step
          icon="fa-solid:car"
          textMain="Choose Location"
          textSub="Choose Location to pickup your car."
        />
      </div>
    </section>
  );
};

export default HowItWorks;
