import { BadgeCheck, EllipsisVertical } from "lucide-react";
import { Link } from "react-router-dom";
import Tooltip from "../elements/Tooltip";
import { formatPublishedAt, formatViews } from "../../utils/utility";
import Button from "../elements/Button";
import OptionModal from "../modals/OptionModal";
import { VideoBodyAccountProps, VideoBodyDescriptionProps, VideoBodyFooterProps, VideoBodyOptionProps, VideoBodyProfileProps, VideoBodyProps, VideoBodyTitleProps } from "../../types/videoProps";
import Image from "../elements/Image";



const VideoBody = ({ children, displayMode }: VideoBodyProps) => {
    return <div className={`video-body flex gap-1 items-start ${displayMode === 'Grid' ? 'justify-between relative' : 'flex-col ms-2'}`}>
        {children}
    </div>;
}

const Profile = ({ profileUrl, channelName }: VideoBodyProfileProps) => {
    return <a href="#" className="flex flex-shrink-0">
        <Image src={profileUrl} alt={channelName} variant="profile" size="profile-small" />
    </a>
}


const Title = ({ title }: VideoBodyTitleProps) => {
    return <div className="flex text-clamp-2 font-medium">{title}</div>
}

const Account = ({ channelId, channelName, channelVerified }: VideoBodyAccountProps) => {
    return <Link to={`/channel/${channelId}`} className="text-slate-700 text-sm inline-flex items-center gap-1 relative group">
        {channelName}
        {channelVerified && <BadgeCheck className="w-4 h-4" />}
        <Tooltip variant="top" size="small" tooltip={channelName} />
    </Link>
}


const Footer = ({ viewCount, publishedAt }: VideoBodyFooterProps) => {
    return <span className="text-[10px] sm:text-xs text-slate-700 whitespace-nowrap">
        {formatViews(viewCount)} views • {formatPublishedAt(publishedAt)}
    </span>
}


const Description = ({ description }: VideoBodyDescriptionProps) => {
    return <p className="text-xs text-clamp-2 md:mt-2 text-slate-500">{description}</p>
}




const Option = ({showOption, channelName, containerRef, type, setShowOption}: VideoBodyOptionProps) => {
    return <div className="relative">
        <Button variant="ghostNonHover" size="icon" className="w-8 h-8 m-0 p-1 justify-self-end" onClick={() => setShowOption(!showOption)}>
            <EllipsisVertical className="w-5 h-5" />
        </Button>
        {showOption && <OptionModal type={type} targetRef={containerRef} showOption={showOption} channelName={channelName} />}
    </div>
}


VideoBody.Profile = Profile;
VideoBody.Title = Title;
VideoBody.Account = Account;
VideoBody.Description = Description;
VideoBody.Option = Option
VideoBody.Footer = Footer;



export default VideoBody;