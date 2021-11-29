import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export const resumeData = {
  name: "Aldin is Coding",
  title: "Front End Developer",
  birthday: "07th February 1997",
  email: "ado@gmail.com",
  address: "77111 test Street",
  phone: "123 5655 890",
  socials: {
    Facebook: {
      link: "https://www.facebook.com/",
      text: "AldinisCoding",
      icon: <FacebookIcon />,
      id: 1,
    },
    Twitter: {
      link: "https://twitter.com/?lang=en",
      text: "MyTwitter",
      icon: <TwitterIcon />,
      id: 2,
    },
    LinkedIn: {
      link: "https://www.facebook.com/",
      text: "MyLinkedIn",
      icon: <LinkedInIcon />,
      id: 3,
    },
    Github: {
      link: "https://github.com/Alginest",
      text: "GitHub",
      icon: <GitHubIcon />,
      id: 4,
    },
  },
};
