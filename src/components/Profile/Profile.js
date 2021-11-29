import { Typography } from "@material-ui/core";
import React from "react";
import CostumeTimeline, {
  CostumeTimelineSeparator,
} from "../Timeline/Timeline";
//btn
import CostumeButton from "../Button/Button";
import GetAppIcon from "@mui/icons-material/GetApp";
//css
import "./Profile.css";
//img
import myImage from "../../assets/imges/profile.jpg";
//data
import { resumeData } from "../../utils/resumeData";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { TimelineContent, TimelineItem } from "@material-ui/lab";

const CostumeTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CostumeTimelineSeparator />
    <TimelineContent className="timeline-content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}: </span>
          <a href={link} target="_blank" rel="noreferrer">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}: </span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>
      <figure className="profile_image">
        <img src={myImage} alt="ado" />
      </figure>
      <div className="profile_information">
        <CostumeTimeline icon={<PersonOutlineOutlinedIcon />}>
          <CostumeTimelineItem title="Name" text={resumeData.name} />
          <CostumeTimelineItem title="Title" text={resumeData.title} />
          <CostumeTimelineItem title="Email" text={resumeData.email} />
          {Object.keys(resumeData.socials).map((key) => (
            <CostumeTimelineItem
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
              key={resumeData.socials[key].id}
            />
          ))}
        </CostumeTimeline>
        <div className="button_container">
          <CostumeButton text={"Download Cv"} icon={<GetAppIcon />} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
