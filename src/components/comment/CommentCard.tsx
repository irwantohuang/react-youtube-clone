import { ChevronDown, ThumbsDown, ThumbsUp } from "lucide-react";
import { CommentDetailsType } from "../../data/comments";
import { formatPublishedAt, formatViews } from "../../utils/utility";
import Button from "../elements/Button";
import Image from "../elements/Image";
import { useEffect, useRef, useState } from "react";



const CommentCard = (props: CommentDetailsType) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isClamped, setIsClamped] = useState(false);
    const commentRef = useRef<HTMLDivElement>(null);

    const parts = props.comment?.split("\n");

    useEffect(() => {
        if (commentRef.current) {
            const { scrollHeight, clientHeight } = commentRef.current;
            if (scrollHeight > clientHeight) {
                setIsClamped(true);
            }
        }
    }, []);

    return (
        <div className="flex items-center justify-between gap-2">
            <div className="flex items-start gap-3">
                <Image variant={"profile"} size={"profile-small"} src={props.author.profileUrl} />
                <div className="flex flex-col gap-1">
                    <p className="font-semibold">{props.author.id}
                        <span className="text-sm ms-4 font-normal text-secondary-text">{formatPublishedAt(props.publishedAt)?.replace("in ", "")}</span>
                    </p>

                    <div ref={commentRef} className={`text-sm lg:text-base pe-2 ${isExpanded ? '' : 'text-clamp-2'}`}>
                        {parts?.map((p, index) => (
                            <p key={index}>{p}</p>
                        ))}
                    </div>

                    {isClamped && (
                        <Button onClick={() => setIsExpanded(!isExpanded)} variant="ghostNonHover" className="p-0 font-semibold text-secondary-text">
                            {isExpanded ? 'Show less' : 'Read more'}
                        </Button>
                    )}

                    <div className="flex items-center">
                        <Button variant={"ghost"} className="rounded-full">
                            <ThumbsUp size={16} />
                        </Button>
                        <span className="text-secondary-text text-sm me-4">{formatViews(props.likeCount)}</span>
                        <Button variant={"ghost"} className="rounded-full me-4">
                            <ThumbsDown size={16} />
                        </Button>
                        <Button variant={"ghost"} className="text-sm font-semibold rounded-full px-4 py-1">
                            Reply
                        </Button>
                    </div>

                    {props.replies !== 0 && (
                        <Button className="px-4 py-1 rounded-full flex items-center gap-1 text-blue-600 hover:bg-blue-200" variant={"ghost"}>
                            <ChevronDown />
                            {props.replies} Replies
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CommentCard;