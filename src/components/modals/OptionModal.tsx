import Button from "../elements/Button";
import { RefObject, useEffect, useRef, useState } from "react";
import { homeOptions, shortOptions, subscriptionOptions } from "../../data/options";

interface OptionModalProps {
    targetRef: RefObject<HTMLDivElement>;
    showOption: boolean
    type: string
}

const OptionModal = ({ targetRef, type, showOption }: OptionModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [transform, setTransform] = useState("");

    let options;
    switch (type) {
        case "home": options = homeOptions; break;
        case "subscriptions": options = subscriptionOptions; break;
        case "shorts": options = shortOptions; break;
        default: options = homeOptions; break;
    }


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
                <section key={section.name} className="flex flex-col w-full whitespace-nowrap h-full">
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