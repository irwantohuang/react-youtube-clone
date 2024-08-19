import Button from "../elements/Button";
import { RefObject, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { homeOptions, subscriptionOptions } from "../../data/options";

interface OptionModalProps {
    targetRef: RefObject<HTMLDivElement>;
    showOption: boolean
}

const OptionModal = ({ targetRef, showOption }: OptionModalProps) => {
    const location = useLocation();
    const modalRef = useRef<HTMLDivElement>(null);
    const [transform, setTransform] = useState("");
    const [options, setOptions] = useState(homeOptions);

    useEffect(() => {
        const pathName = location.pathname;
        if (pathName === '/subscriptions') setOptions(subscriptionOptions);
        else if (pathName === "/") setOptions(homeOptions);
    }, [location.pathname, options])


    useEffect(() => {
        const updatePosition = () => {
            if (targetRef.current && modalRef.current) {
                const targetRect = targetRef.current.getBoundingClientRect();
                const modalRect = modalRef.current.getBoundingClientRect();

                const rightOverflow = targetRect.right + modalRect.width > window.innerWidth;
                const bottomOverflow = targetRect.bottom + modalRect.height > window.innerHeight;

                if (rightOverflow && bottomOverflow) setTransform("bottom-full right-full")
                else if (rightOverflow) setTransform("right-full")
                else if (bottomOverflow) setTransform("bottom-full")
            }
        }

        if (showOption) {
            updatePosition();
            window.addEventListener("resize", updatePosition)
            return () => window.removeEventListener("resize", updatePosition)
        }

    }, [targetRef, showOption])


    return <div ref={modalRef} className={`bg-white overscroll-normal rounded-md absolute z-[1002] ${transform}`}>
        <div className="flex flex-col w-[250px] h-full shadow-xl py-2">
            {options.map((section, index) => (
                <section className="flex flex-col w-full whitespace-nowrap h-full">
                    {section.children.map((option) => (
                        <Button key={option.name} variant="ghost" className="flex items-center gap-2 w-full px-4 rounded-none py-2 font-light text-sm">
                            <option.icon />
                            <span>{option.name}</span>
                        </Button>
                    ))}
                    { index < options.length - 1 && <hr className="my-2" />}
                </section>
            ))}
        </div>
    </div>
}

export default OptionModal;