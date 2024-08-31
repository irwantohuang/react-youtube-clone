import Header from "../components/layout/Header/index";
import Sidebar from "../components/layout/Sidebar";
import MainView from "./MainView";

const MainLayout = () => {
    return (
        <div className="max-h-screen flex flex-col w-full overflow-x-hidden">
            <Header />

            <div className="flex-grow overflow-auto flex w-full mx-auto">
                <Sidebar />
                <MainView />
            </div>
        </div>
    )
}

export default MainLayout;