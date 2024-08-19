export interface VideoType {
    id: number,
    contentDetails: {
        title: string,
        publishedAt: Date,
        thumbnailUrl: string,
        videoId: string,
        videoUrl: string,
        videoDuration: number,
        viewCount: number,
        likeCount: number,
        commentCount: number,
        description: string
    },
    channel: {
        name: string,
        id: string,
        profileUrl: string,
        verified: boolean
    }
}