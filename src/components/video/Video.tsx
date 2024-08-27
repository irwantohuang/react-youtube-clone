import VideoBody from "./VideoBody";
import VideoThumbnail from "./VideoThumbnail";
import { VideoHeaderProps, VideoProps } from "../../types/videoProps";
import Overlay from "../modals/Overlay";
import { Link } from "react-router-dom";

const Video = ({ children }: VideoProps) => {
    return children
}

const Header = ({ profileUrl, channelName, channelId }: VideoHeaderProps) => {
    return <Link to={`/channel/${channelId}`} className="flex z-[10] items-center gap-2 cursor-pointer">
            <img src={profileUrl} alt={channelName} className="w-8 h-8 rounded-full" />
            <span className="font-semibold">{channelName}</span>
        </Link>
}


Video.Header = Header;
Video.Thumbnail = VideoThumbnail;
Video.Body = VideoBody
Video.Overlay = Overlay;

export default Video;