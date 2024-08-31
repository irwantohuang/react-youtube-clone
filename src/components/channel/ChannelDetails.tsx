import { useEffect, useState } from "react";
import Image from "../elements/Image";
import { ChannelType, channels } from "../../data/channels";
import Button from "../elements/Button";
import { Bell, ChevronDown } from "lucide-react";
import VideoBody from "../video/VideoBody";

interface ChannelDetailProps {
    id: string | undefined,
}

const ChannelDetail = ({ id }: ChannelDetailProps) => {
    const [channel, setChannel] = useState<ChannelType | undefined>(undefined);

    useEffect(() => {
        if (id) {
            const findChannel = channels.find((e) => e.id === id)
            setChannel(findChannel);
        }
    }, [id])

    return (
        <div className="flex items-center gap-2 lg:gap-3">
            {channel?.profileUrl && 
                <Image src={channel.profileUrl} alt={channel?.name} variant="profile" size="profile-small" />   
            }

            <VideoBody.Account channelId={channel?.id} channelName={channel?.name} channelVerified={true} channelSubscribers={channel?.subscribers} />

            {channel?.isSubscribed ?
                <Button className="ms-2 lg:ms-6 rounded-full px-4 font-semibold text-sm flex items-center gap-0.5 lg:gap-2 py-2 lg:py-3">
                    <Bell />
                    Subscribed
                    <ChevronDown />
                </Button>
                :
                <Button variant="dark" className="ms-2 lg:ms-6 rounded-full px-4 font-semibold text-sm">
                    Subscribe
                </Button>
            }
        </div>
    )
}

export default ChannelDetail;