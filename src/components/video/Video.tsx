import VideoBody from "./VideoBody";
import VideoThumbnail from "./VideoThumbnail";
import { VideoHeaderProps, VideoProps } from "../../types/videoProps";
import Overlay from "../modals/Overlay";

const Video = ({ children }: VideoProps) => {
    return children
}

const Header = ({ profileUrl, channelName }: VideoHeaderProps) => {
    return <header>
        <a href="#" className="flex flex-shrink-0 items-center gap-2">
            <img src={profileUrl} alt={channelName} className="w-8 h-8 rounded-full" />
            <span className="font-semibold">{channelName}</span>
        </a>
    </header>
}


Video.Header = Header;
Video.Thumbnail = VideoThumbnail;
Video.Body = VideoBody
Video.Overlay = Overlay;

export default Video;