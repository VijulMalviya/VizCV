import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface ATSScoreProps {
  ATSScore: number;
}

const ProgressCircle: React.FC<ATSScoreProps> = ({ ATSScore }) => {
  const getColor = (ATSScore: number) => {
    if (ATSScore <= 40) {
      return "#ff4d4d";
    } else if (ATSScore <= 75) {
      return "#ff8c00";
    } else {
      return "#4db8ff";
    }
  };

  return (
    <div style={{ width: "150px", height: "150px" }}>
      <CircularProgressbar
        value={ATSScore}
        text={`${ATSScore}%`}
        styles={buildStyles({
          pathColor: getColor(ATSScore),
          textColor: getColor(ATSScore),
          trailColor: "#d6d6d6",
        })}
      />
    </div>
  );
};

export default ProgressCircle;
