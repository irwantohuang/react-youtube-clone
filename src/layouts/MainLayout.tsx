import Header from "../components/layout/Header/index";
import Sidebar from "../components/layout/Sidebar";
import MainView from "./MainView";

const MainLayout = () => {
    return (
        <div className="max-h-screen flex flex-col overflow-x-hidden">
            <Header />

            <div className="grid grid-cols-[auto,1fr] flex-grow overflow-auto">
                <Sidebar />
                <MainView />
            </div>
        </div>
    )
}

export default MainLayout;