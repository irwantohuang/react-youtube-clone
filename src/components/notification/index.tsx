import { Dot } from "lucide-react";
import Image from "../elements/Image";
import { formatPublishedAt } from "../../utils/utility";
import Button from "../elements/Button";
import { useState } from "react";
import Video from "../video/Video";
import Overlay from "../modals/Overlay";

interface NotificationCardProps {
    id: number,
    profileUrl: string | undefined,
    activity: string,
    channelName: string,
    thumbnailUrl: string,
    title: string,
    postedAt: Date,
    hasSeen: boolean
}

const NotificationCard = ({profileUrl, activity, thumbnailUrl, channelName, title, postedAt, hasSeen}: NotificationCardProps) => {
    const [showOption, setShowOption] = useState(false);

    return (
        <Button variant="ghost" className="w-full flex items-start gap-1 md:gap-4 px-2 py-4">
            <div className={`flex flex-shrink-0 items-center ${hasSeen ? 'ps-4' : ''}`}>
                { !hasSeen && <Dot className="w-4 h-4 text-blue-500 text-3xl" />}
                <Image src={profileUrl} variant="profile" size="profile-small" />
            </div>

            <div className="ps-2 flex flex-col gap-2 text-start flex-grow">
                <span className="italic text-sm">{`${channelName} ${activity === 'live' ? 'is live: ' : 'uploaded: '} ${title}`}</span>
                <span className="italic text-xs text-secondary-text">{formatPublishedAt(postedAt)}</span>
            </div>

            <div className="max-w-[75px] md:max-w-[100px] rounded-md overflow-hidden">
                <Image src={thumbnailUrl} alt={title} variant="thumbnail" />
            </div>

            <Video.Body.Option showOption={showOption} type="notification" setShowOption={setShowOption} channelName={channelName} />
            <Overlay isOpen={showOption} onClick={setShowOption} />
        </Button>
    )
}

export default NotificationCard;