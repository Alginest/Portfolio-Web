import React from "react";
//css
import "./Timeline.css";
//material ui
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@material-ui/lab";
import { Typography } from "@material-ui/core";
//icons

const CostumeTimeline = ({ title, icon, children }) => {
  return (
    <Timeline className={"timeline"}>
      {/* Item Header */}
      <TimelineItem className={"timeline_firstItem"}>
        <TimelineSeparator>
          <TimelineDot className={"timeline_dot_header"}>{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className={"timeline_header"}>
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {children}
    </Timeline>
  );
};
export const CostumeTimelineSeparator = () => (
  <TimelineSeparator className={"separator_padding"}>
    <TimelineDot variant="outlined" className={"timeline_dot"} />
    <TimelineConnector />
  </TimelineSeparator>
);
export default CostumeTimeline;
