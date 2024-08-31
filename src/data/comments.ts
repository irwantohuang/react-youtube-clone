export interface CommentDetailsType {
    commentId: string | number,
    author: {
        id: string,
        name: string,
        profileUrl: string,
    },
    comment: string,
    publishedAt: Date,
    likeCount: number,
    replies: number,
    replyDetail?: {
        comments: CommentType
    },
    pinned: boolean,

}

export interface CommentType {
    videoId: string,
    commentDetails: CommentDetailsType[]
}

const randomProfileUrl = [
    "https://yt3.ggpht.com/opab1DbA6NgaKktNIVNAzWG1zDPmIxTtR_4Kn03nPmlUMQQ9GGQiMy-zjGUS1imo_tI_CGLK=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.ggpht.com/DEaBrUHtTN7Mi-bDWPRMgyToT2xlLBcGkF3swCq9LdqyYG3WK117JGcGKqNxAesF5L8t7leGOqw=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.ggpht.com/0xoUPrCMLBois-NT3UqhbXUgRZXrl1d4cuDAg7ClZ9Vot17PG1tz6PCJzXfJD6qSb3wFQCyJoA=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.ggpht.com/M1KbHxEuiGobCWOaxF9FsArc67FmzgGVsIqm9Dnm_Lqga7UujpQ8I6XbxKG-04sFaygt2AjSpw=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.ggpht.com/ytc/AIdro_lFxeJpz6aI78eGYf6OcxsvOc6NZWIHC3DYth7tp0BQ3yE=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.ggpht.com/lAj6wzPQ-FkVKsmzCw9yV5iT3skKVh5l3AUPmJblHiTUDr4wvlUdWXPu84Fy4o3709Cz2ZRK4w=s800-c-k-c0x00ffffff-no-rj",
    "https://robohash.org/random-profile?size=200x200"
]
export const comments: CommentType[] = [
    {
        videoId: "INuSVsB2X54",
        commentDetails: [
            {
                commentId: 1,
                author: {
                    id: "@Anonym",
                    name: "Anonymous",
                    profileUrl: randomProfileUrl[0]
                },
                comment: "Moving the capital doesn't help Jakarta from sinking, so why do they say moving the capital is the Solution?",
                publishedAt: new Date("2024-08-31T10:26:25"),
                likeCount: 234,
                replies: 5,
                pinned: false
            },
            {
                commentId: 2,
                author: {
                    id: "@johndoe",
                    name: "John Doe",
                    profileUrl: randomProfileUrl[1]
                },
                comment: "This is very high quality for the views and likes, wow  🇮🇩",
                publishedAt: new Date("2024-08-31T19:50:25"),
                likeCount: 245,
                replies: 0,
                pinned: false
            },
            {
                commentId: 3,
                author: {
                    id: "@mike",
                    name: "Mike",
                    profileUrl: randomProfileUrl[2]
                },
                comment: "The location of Nusantara was set to be the capital of Indonesia by our founding father Soekarno, after decades Jokowi is the only president that has the balls to take action",
                publishedAt: new Date("2024-08-30T12:50:25"),
                likeCount: 15,
                replies: 2,
                pinned: false
            },
            {
                commentId: 4,
                author: {
                    id: "@randomLy",
                    name: "Randomly",
                    profileUrl: randomProfileUrl[3]
                },
                comment: 'The name of the capital is undervaluing its actual meaning. \n \nIt`s like Italy build a new capital city and call it "Mediterranean". \n \nOr Ireland build a new city and naming it "British Isles"',
                publishedAt: new Date("2024-08-31T19:50:25"),
                likeCount: 15,
                replies: 2,
                pinned: false
            },
            {
                commentId: 5,
                author: {
                    id: "@horizon",
                    name: "Horizon",
                    profileUrl: randomProfileUrl[4]
                },
                comment: `"The Sinking City" is just an euphemism for Indonesia's agenda to throw away all things from colonialism in the past. In fact, Jakarta was never prepared by the colonials in the past to become a national capital city. That was because the colonizers only wanted a city near the port to transport stoled agricultural products and spices. Including the current Indonesian state palace is a colonial heritage building. That's the first.
                \n \n \n \nSecond, Indonesia wants to create a more balanced epicentrum. Currently, the island of Java is inhabited by 56 percent of Indonesia's population, this is extraordinarily dense. Though, Java island is only 6 percent by total area of country. So, to evenly distribute the population throughout Indonesia it is very very necessary.
                \n \nOnce again, the sinking city is just an issue created to simplify all the reasons above. Indeed, the sea water discharge of the Jakarta coast rises 17 cm every year. But it will take hundreds years to sink the whole of Jakarta. It is not even happens in 500 years. That is not the main issue.`,
                publishedAt: new Date("2024-08-29T10:50:25"),
                likeCount: 15,
                replies: 2,
                pinned: false
            }
        ]
    }
]