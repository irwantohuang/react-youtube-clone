import { Clapperboard, Clock, Flame, Gamepad2, History, Home, ListVideo, MonitorPlay, Music2, Newspaper, Repeat, SquarePlay, SquareUserRound, ThumbsUp, Trophy, TvMinimalPlayIcon, User } from "lucide-react";

export const navMobileLinks = [
    { title: "Home", icon: Home, url: "/" },
    { title: "Shorts", icon: Repeat, url: "/shorts" },
    { title: "Subscriptions", icon: Clapperboard, url: "/subscriptions" },
    { title: "You", icon: MonitorPlay, url: "/subscriptions" }
]

export const navLinks = [
    { 
        section: "", 
        children: [
            { title: "Home", icon: Home, url: "/" },
            { title: "Shorts", icon: Repeat, url: "/shorts" },
            { title: "Subscriptions", icon: Clapperboard, url: "/subscriptions?flow=1" }
        ]
    },
    {
        section: "You",
        children: [
            { title: "Your Channel", icon: SquareUserRound, url: "/your-channel" },
            { title: "History", icon: History, url: "/history" },
            { title: "Playlsits", icon: ListVideo, url: "/playlists" },
            { title: "Your Videos", icon: SquarePlay, url: "/your-videos" },
            { title: "Watch Later", icon: Clock, url: "/watch-later" },
            { title: "Liked Videos", icon: ThumbsUp, url: "/liked-videos" },
        ]
    },
    {
        section: "Subscriptions",
        visibleItem: 5,
        children: [
            { title: "Alan Walker", icon: User, url: "/channel" },
            { title: "Tomorrowland", icon: User, url: "/channel" },
            { title: "Ed Sheeran", icon: User, url: "/channel" },
            { title: "DMLV", icon: User, url: "/channel" },
            { title: "88rising", icon: User, url: "/channel" },
            { title: "Avicii", icon: User, url: "/channel" },
            { title: "Capital FM", icon: User, url: "/channel" },
            { title: "Justin Bieber", icon: User, url: "/channel" },
            { title: "One Dierction", icon: User, url: "/channel" },
            { title: "The Chainsmokers", icon: User, url: "/channel" },
            { title: "The Lost Boys", icon: User, url: "/channel" },
            { title: "Simon Squibb", icon: User, url: "/channel" },
        ]
    },
    {
        section: "Explore",
        children: [
            { title: "Trending", icon: Flame, url: "/trending" },
            { title: "Music", icon: Music2, url: "/music" },
            { title: "Movies", icon: TvMinimalPlayIcon, url: "/movies" },
            { title: "Gaming", icon: Gamepad2, url: "/gaming" },
            { title: "News", icon: Newspaper, url: "/news" },
            { title: "Sports", icon: Trophy, url: "/sports" },
        ]
    }     
]