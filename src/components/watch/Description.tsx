import { useEffect, useRef, useState } from "react";
import { formatDate, formatPublishedAt, formatViews } from "../../utils/utility";
import Button from "../elements/Button";

interface DescriptionProps {
    viewCount: number | undefined,
    publishedAt: Date | undefined,
    description: string | undefined
}

const Description = ({ viewCount, publishedAt, description }: DescriptionProps) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const descriptionRef = useRef<HTMLDivElement>(null);
    const [isClamped, setIsClamped] = useState(false);


    const convertHashtagsToLinks = (text: string) => {
        return text.replace(/#(\w+)/g, '<a class="text-blue-500" href="https://www.youtube.com/hashtag/$1" target="_blank">#$1</a>');
    };

    const parts = description?.split("\n").map(part => convertHashtagsToLinks(part))


    useEffect(() => {
        const checkClamping = () => {
            if (descriptionRef.current) {
                const { scrollHeight, clientHeight } = descriptionRef.current;
                if (scrollHeight > clientHeight) {
                    setIsClamped(true);
                } else {
                    setIsClamped(false);
                }
            }
        };

        checkClamping();
        window.addEventListener("resize", checkClamping);

        return () => {
            window.removeEventListener("resize", checkClamping);
        };
    }, [description]);

    return (
        <div className="bg-secondary rounded-md px-2 py-3 mt-2">

            <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">{isExpanded ? viewCount?.toLocaleString() : formatViews(viewCount)} views</span>
                <span className="text-sm font-semibold">{isExpanded ? formatDate(publishedAt, 1) : formatPublishedAt(publishedAt)}</span>
            </div>

            <div ref={descriptionRef} className={`mt-2 ${isExpanded ? '' : 'text-clamp-2'}`}>
                {parts?.map((part, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: part }} />
                ))}
            </div>

            {isClamped && (
                <Button onClick={() => setIsExpanded(!isExpanded)} variant="ghostNonHover" className="p-0 mt-1 font-semibold">
                    {isExpanded ? 'Show less' : '...more'}
                </Button>
            )}
        </div>
    )
}

export default Description;