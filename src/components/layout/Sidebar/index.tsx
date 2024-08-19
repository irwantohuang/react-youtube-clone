import { useSidebarContext } from "../../../contexts/SidebarContext";
import { navLinks, navMobileLinks } from "../../../data/navLinks";
import StartHeader from "../Header/StartHeader";
import LinkItem from "./LinkItem";
import SidebarMobile from "./SidebarMobile";
import SidebarSection from "./SidebarSection";

const Sidebar = () => {
    const { isLargeOpen, isMobileOpen, toggle } = useSidebarContext();

    return (
        <>
            <aside className={`sticky top-0 overflow-y-auto overflow-x-hidden px-0 hidden md:flex flex-col w-[72px] ${isLargeOpen ? 'lg:flex' : 'lg:hidden'}`}>
                <div className="mt-2">
                <SidebarMobile>
                    {navMobileLinks.map((link) => (
                        <LinkItem title={link.title} url={link.url} Icon={link.icon} key={link.title} mobileView={true} />
                    ))}
                </SidebarMobile>
                </div>
            </aside>

            {isMobileOpen &&
                <div className="fixed inset-0 z-[999] bg-neutral-800/50" onClick={toggle} />
            }

            <aside className={`lg:sticky absolute z-[999] flex-col max-h-screen bg-white top-0 scrollbar-hidden overflow-x-hidden overflow-y-auto px-4 w-[240px] transition-transform duration-300 ease-in-out
                ${isLargeOpen ? 'lg:hidden' : 'lg:flex'}
                ${isMobileOpen ? 'flex inset-0  translate-x-0 py-0' : '-translate-x-full lg:translate-x-0 py-0'}
            `}>
                <div className="lg:hidden h-[56px] sticky top-0 py-2">
                    <StartHeader />
                </div>
                {navLinks.map((nav, index) => (
                    <SidebarSection key={index} title={nav.section} visibleItem={nav.visibleItem}>
                        {nav.children.map((link) => (
                            <LinkItem key={link.title} title={link.title} url={link.url} Icon={link.icon} />
                        ))}
                    </SidebarSection>
                ))}
            </aside>
        </>
    )
}

export default Sidebar;