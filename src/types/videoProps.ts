import { ReactNode, RefObject } from "react"

export interface VideoLayoutProps {
    title?: string,
    children: ReactNode,
    visibleItem?: number,
    displayMode?: string,
    setDisplayMode?: (value: string) => void
}

export interface VideoProps {
    children: ReactNode;
}

export interface VideoHeaderProps {
    profileUrl: string,
    channelName: string,
    channelId: string,
}

export interface VideoThumbnailProps {
    videoId: string,
    thumbnailUrl: string,
    title: string,
    playVideo: boolean,
    videoDuration: number,
    videoUrl: string,
}

export interface VideoBodyProps {
    children: ReactNode,
    displayMode: string
}

export interface VideoBodyProfileProps {
    profileUrl: string,
    channelName: string,
    channelId: string,
}

export interface VideoBodyTitleProps {
    title: string
}

export interface VideoBodyAccountProps {
    channelId: string | undefined,
    channelName: string | undefined,
    channelVerified: boolean,
    channelSubscribers?: number 
}

export interface VideoBodyFooterProps {
    viewCount: number,
    publishedAt: Date
}

export interface VideoBodyDescriptionProps {
    description: string
}


export interface VideoBodyOptionProps {
    showOption: boolean,
    setShowOption: (value: boolean) => void,
    type: string,
    containerRef?: RefObject<HTMLDivElement>,
    channelName?: string,
}