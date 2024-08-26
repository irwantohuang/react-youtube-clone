import { ArrowDownToLine, BellOff, BookMarked, CircleMinus, CircleSlash, EyeOff, Flag, Forward, History, ListVideo, MessageSquareWarning } from "lucide-react";


const firstOptions = [
    { name: 'Add to queue',             icon: ListVideo,        type: ['home', 'subscriptions'] },
    { name: 'Save to watch alter',      icon: History,          type: ['home', 'subscriptions'] },
    { name: 'Save to playlist',         icon: BookMarked,       type: ['home', 'subscriptions'] },
    { name: 'Download',                 icon: ArrowDownToLine,  type: ['subscriptions'] },
    { name: 'Share',                    icon: Forward,          type: ['home', 'shorts'] },
    { name: 'Hide this notification',   icon: EyeOff,          type: ['notification'] },
    { name: 'Turn off all from (channelName)',       icon: BellOff,          type: ['notification'] },
]
const secondOptions = [
    { name: 'Not interested',           icon: CircleSlash,          type: ['home', 'shorts'] },
    { name: "Don't recommend channel",  icon: CircleMinus,          type: ['home'] },
    { name: "Report",                   icon: Flag,                 type: ['home', 'shorts'] },
    { name: "Hide",                     icon: CircleSlash,          type: ['subscriptions'] },
    { name: "Send feedback",            icon: MessageSquareWarning,  type: ['shorts'] },
]

export const homeOptions = [
    { name: "first-options",    children: firstOptions.filter(v => v.type.includes("home")) },
    { name: "second-options",   children: secondOptions.filter(v => v.type.includes("home")) },
]

export const subscriptionOptions = [
    { name: "first-options",    children: firstOptions.filter(v => v.type.includes("subscriptions")) },
    { name: "second-options",   children: secondOptions.filter(v => v.type.includes("subscriptions")) },
]

export const shortOptions = [
    { name: "first-options",    children: firstOptions.filter(v => v.type.includes("shorts")) },
    { name: "second-options",   children: secondOptions.filter(v => v.type.includes("shorts")) },
]

export const notificationOptions = [
    { name: "first-options",    children: firstOptions.filter(v => v.type.includes("notification")) },
]