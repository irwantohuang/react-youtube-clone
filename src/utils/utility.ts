import { VideoType } from "../types/video";

const timeAgo: {amount: number, name: Intl.RelativeTimeFormatUnit}[] = [
    { amount: 60, name: "seconds" },
    { amount: 60, name: "minutes" },
    { amount: 24, name: "hours" },
    { amount: 7, name: "days" },
    { amount: 4.34524, name: "weeks" },
    { amount: 12, name: "months" },
    { amount: Number.POSITIVE_INFINITY, name: "years" },
]

export const formatPublishedAt = (date: Date) => {
    let duration = (date.getTime() - new Date().getTime()) / 1000;

    for (let i = 0; i < timeAgo.length; i++ ) {
        const division = timeAgo[i];
        if (Math.abs(duration) < division.amount) {
            return new Intl.RelativeTimeFormat(undefined, {
                numeric: "always"
            }).format(Math.round(duration), division.name);
        }
        duration /= division.amount
    }
}


export const formatViews = (views: number) => {
    return new Intl.NumberFormat(undefined, {
        notation: "compact"
    }).format(views);
}

export const formatDuration = (duration: number) => {
    const hours = Math.floor(duration / 60 / 60);
    const minutes = Math.floor((duration - hours * 60 * 60) / 60);
    const seconds = duration % 60;

    const formatter = new Intl.NumberFormat(undefined, { minimumIntegerDigits: 2 })

    if (hours > 0) return `${hours}:${formatter.format(minutes)}:${formatter.format(seconds)}`
    else return `${minutes}:${formatter.format(seconds)}`
}


const BASE_URL = "https://www.youtube.com"

export const getLink = (id: string, type: string) => {
    switch (type) {
        case "video": return BASE_URL + `/watch?v=${id}`
        case "channel": return BASE_URL + `/@${id}`
    }
}


export const shuffleArray = (array: VideoType[]): VideoType[] => {
    for (let i = array.length - 1; i > 0; i--) {
        const j: number = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


type SortableFields = keyof VideoType['contentDetails'] | keyof VideoType['channel'];

export const sortArray = (array: VideoType[], sortOrder: 'asc' | 'desc', sortBy: SortableFields): VideoType[] => {
    return array.slice().sort((a, b) => {
        // Get the values to compare
        const x = (sortBy in a.contentDetails) ? a.contentDetails[sortBy as keyof VideoType['contentDetails']] : a.channel[sortBy as keyof VideoType['channel']];
        const y = (sortBy in b.contentDetails) ? b.contentDetails[sortBy as keyof VideoType['contentDetails']] : b.channel[sortBy as keyof VideoType['channel']];

        // Ensure values are treated as strings for comparison
        const xValue = String(x);
        const yValue = String(y);

        // Debugging output
        console.log("Comparing x:", xValue, "with y:", yValue);

        if (xValue < yValue) return sortOrder === 'asc' ? -1 : 1;
        if (xValue > yValue) return sortOrder === 'asc' ? 1 : -1;
        return 0;
    });
};