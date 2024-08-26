import { useSearchParams } from "react-router-dom"

const WatchPage = () => {

    const [searchParams] = useSearchParams();
    searchParams.get('v');

    return <h1>Watch Page</h1>
}

export default WatchPage