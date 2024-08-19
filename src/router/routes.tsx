import MainLayout from "../layouts/MainLayout";
import ChannelPage from "../pages/ChannelPage";
import HomePage from "../pages/HomePage";
import SubscriptionsPage from "../pages/SubscriptionsPage";
import WatchPage from "../pages/WatchPage";

export const routes = [
    {
        element: <MainLayout />,
        children: [
            { path: "/", element: <HomePage />, },
            { path: "/channel/:id", element: <ChannelPage /> },
            { path: "/watch/:id", element: <WatchPage /> },
            { path: "/subscriptions", element: <SubscriptionsPage /> },
        ]
    }
]