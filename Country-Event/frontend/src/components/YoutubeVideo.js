import YouTube from "react-youtube";
import classes from "./YoutubeVideo.module.css";

function YouTubeVideo() {
  const videoId = "oDwLK5aJNrc";

  return <YouTube videoId={videoId} className={classes.video} />;
}

export default YouTubeVideo;
