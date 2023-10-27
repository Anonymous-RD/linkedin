import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const recentNews = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  // const news = (heading, subtitle) => {};
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {recentNews(
        "'Thank You India':",
        "  Israel As #IndiaIsWithIsrael Trends On Social Media After Hamas Attacks"
      )}
      {recentNews(
        "India-Middle East Economic Corridor ",
        "possible reason for Hamas attack"
      )}
      {recentNews(
        "Paris Hilton responds to mean comments on Instagram",
        " photo of her son Phoenix's head"
      )}
      {recentNews(
        "A Long March rocket",
        " carrying a crew of Chinese astronauts in a Shenzhou-17 spaceship"
      )}
      {recentNews(
        "Elite Matrimony",
        " store at Chennai airport raises questions after woman's post"
      )}
    </div>
  );
}

export default Widgets;
