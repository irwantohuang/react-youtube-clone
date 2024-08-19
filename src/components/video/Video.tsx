import VideoBody from "./VideoBody";
import VideoThumbnail from "./VideoThumbnail";
import { VideoHeaderProps, VideoOverlayProps, VideoProps } from "../../types/videoProps";

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

const Overlay = ({ showOption, setShowOption }: VideoOverlayProps) => {
    if (!showOption) return null
    else return <div className="fixed inset-0 z-[1001] bg-secondary-dark/5" onClick={() => setShowOption(!showOption)} />
}


Video.Header = Header;
Video.Thumbnail = VideoThumbnail;
Video.Body = VideoBody
Video.Overlay = Overlay;

export default Video;