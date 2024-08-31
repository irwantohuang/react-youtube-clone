const timeAgo: {amount: number, name: Intl.RelativeTimeFormatUnit}[] = [
    { amount: 60, name: "seconds" },
    { amount: 60, name: "minutes" },
    { amount: 24, name: "hours" },
    { amount: 7, name: "days" },
    { amount: 4.34524, name: "weeks" },
    { amount: 12, name: "months" },
    { amount: Number.POSITIVE_INFINITY, name: "years" },
]

export const formatPublishedAt = (date: Date | undefined) => {
    if (date) {
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
}


export const formatViews = (views: number | undefined) => {
    if (views) {
        return new Intl.NumberFormat(undefined, {
            notation: "compact"
        }).format(views);
    }
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




export const calculateVisibleItems = (contentWidth: number, columns: number, type: string, width?: number): number => {
    const isSmallScreen = () => window.innerWidth < 1024;
    const sidebarWidth = isSmallScreen() ? 72 : 304;
    let items;

    if (width) {
        items = Math.floor((width / contentWidth) * columns);
    } else {
        items = Math.floor(((window.innerWidth - sidebarWidth) / contentWidth) * columns);
    }
    if (items % 2 !== 0 && type === 'video') items -= 1;

    return items;
}


export const handleEscKey = (callback: () => void) => {
    const handler = (event: KeyboardEvent) => {
        if (event.key === 'Escape') callback();
    }

    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
}


export const formatDate = (date: Date | undefined, type: number) => { 
    if (date) {
        if (type === 1) return date.toLocaleString('en-US', {
            month: "short",
            day: "2-digit",
            year: "numeric"
        });
    }
}