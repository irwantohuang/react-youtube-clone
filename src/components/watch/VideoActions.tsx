import { ArrowDownToLine, Forward, ThumbsDown, ThumbsUp } from "lucide-react";
import Button from "../elements/Button";
import { formatViews } from "../../utils/utility";
import VideoBody from "../video/VideoBody";
import { useEffect, useRef, useState } from "react";
import Video from "../video/Video";

interface VideoActionProps {
    like: number | undefined,
    isLiked: boolean | undefined
}

const VideoActions = ({ like, isLiked }: VideoActionProps) => {
    const [showOption, setShowOption] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null)

    const [likeState, setLikeState] = useState(like);
    const [isLikedState, setIsLikedState] = useState(isLiked)

    useEffect(() => {
        setLikeState(like);
        setIsLikedState(isLiked)
    }, [like, isLiked])

    const handleLikeVideo = () => {
        if (likeState) {
            if (isLikedState) {
                setLikeState(likeState - 1);
                setIsLikedState(false)
            } else {
                setLikeState(likeState + 1);
                setIsLikedState(true)
            }
        }
    }



    return (
        <div className="flex gap-2 items-center" ref={containerRef} >
            <div className="bg-secondary flex rounded-full">
                <Button size="icon" className="w-full flex items-center gap-2 px-4 rounded-l-full rounded-r-none text-sm" onClick={handleLikeVideo}>
                    <ThumbsUp size={20} fill={`${isLikedState ? 'black' : 'none'}`} />
                    {formatViews(likeState)}
                </Button>

                <div className="border-left border-l-2 border-l-secondary-border/50"></div>

                <Button size="icon" className="w-full px-4 rounded-r-full rounded-l-none">
                    <ThumbsDown size={20} />
                </Button>
            </div>

            <Button size="icon" className="w-full hidden lg:flex items-center gap-2 text-sm">
                <Forward size={20} />
                Share
            </Button>

            <Button size="icon" className="w-full hidden lg:flex items-center gap-2 text-sm">
                <ArrowDownToLine size={20} />
                Download
            </Button>

            <VideoBody.Option
                showOption={showOption}
                setShowOption={setShowOption}
                containerRef={containerRef}
                type="watch"
            />

            <Video.Overlay
                isOpen={showOption}
                onClick={setShowOption}
            />
        </div>
    )
}

export default VideoActions;