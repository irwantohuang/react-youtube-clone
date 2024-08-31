import { ArrowUpNarrowWide } from "lucide-react";
import { formatViews } from "../../utils/utility";
import Button from "../elements/Button";
import Image from "../elements/Image";
import CommentCard from "./CommentCard";
import { CommentType } from "../../data/comments";

interface CommentContainerProps {
    commentCount: number | undefined,
    comment: CommentType | undefined
}

const CommentContainer = ({commentCount, comment}: CommentContainerProps) => {


    return (
        <div className="w-full mt-4">
            <div className="flex items-center gap-6">
                <span className="font-semibold text-lg">{formatViews(commentCount)} Comments</span>
                <Button variant={"ghostNonHover"} className="flex items-center gap-2" tooltip="Sort comments">
                    <ArrowUpNarrowWide />
                    Sort by
                </Button>
            </div>

            <div className="flex items-center gap-4 w-full">
                <Image variant={"profile"} size={"profile-small"} src="https://yt3.ggpht.com/ytc/AIdro_kV6uVhIaxVf_YeTcpSRCD-tA0Abhn9gBy2qmH0nkQGJtI=s800-c-k-c0x00ffffff-no-rj" />
                <input type="text" className="w-full bg-transparent border-b text-sm lg:text-base border-b-secondary-border/75 outline-none focus:border-b-secondary-border" placeholder="Add a comment..." />
            </div>

            <div className="flex flex-col gap-6 mt-8">
                {comment?.commentDetails.map((com) => <CommentCard key={com.commentId} {...com} />)}
            </div>
        </div>
    )
}

export default CommentContainer;