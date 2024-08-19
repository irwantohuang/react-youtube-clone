import { ChevronLeft, Mic, Search, X } from "lucide-react";
import { useRef, useState } from "react";
import Button from "../../elements/Button";

interface CenterHeaderProps {
    showSearch: boolean,
    isFocused: boolean,
    setShowSearch: (v: boolean) => void
    setIsFocused: (v: boolean) => void
}

const CenterHeader = (props: CenterHeaderProps) => {
    const { showSearch, isFocused, setShowSearch, setIsFocused } = props;

    const [input, setInput] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }

    const handleClearInput = () => {
        inputRef.current?.focus();
        setInput("")
    }

    const handleOnBlur = () => {
        setTimeout(() => {
            if (document.activeElement !== inputRef.current) {
                setIsFocused(false)
            }
        }, 200);
    }

    return (
        <form className={`flex-grow justify-center gap-2 ${showSearch ? 'flex' : 'hidden md:flex'}`}>
            <Button className={`${showSearch ? 'flex' : 'hidden'}`} variant="ghost" size="icon" type="button" tooltip="Back" onClick={() => setShowSearch(false)}>
                <ChevronLeft />
            </Button>
            <div className={`flex flex-grow justify-end max-w-[650px] `}>
                <div className={`relative flex items-center ${isFocused ? 'w-full' : 'w-full lg:w-[550px]'}`}>
                    {isFocused &&
                        <Button variant="ghostNonHover" className="absolute left-1 top-1/2 -translate-y-1/2 opacity-50 pointer-events-none cursor-none">
                            <Search />
                        </Button>
                    }
                    <input
                        ref={inputRef}
                        onFocus={() => setIsFocused(true)}
                        onBlur={handleOnBlur}
                        onChange={handleInputChange}
                        type="search"
                        placeholder="Search"
                        name="search"
                        id="search"
                        value={input}
                        className={`rounded-l-full w-full px-4 py-2 border border-neutral-200 outline-none shadow-inner shadow-neutral-100 placeholder-neutral-500 focus:border-blue-500 ${isFocused ? 'pl-12' : ''}`}
                    />
                    {isFocused &&
                        <Button type="button" onClick={handleClearInput} variant="ghost" size="icon" className="hidden md:flex absolute cursor-pointer right-1 top-1/2 -translate-y-1/2 opacity-50">
                            <X />
                        </Button>
                    }
                </div>
                <Button tooltip="Search" className="px-4 rounded-r-full border z-99 border-neutral-200 bg-neutral-50 ">
                    <Search />
                </Button>
            </div>
            <Button size="icon" tooltip="Search with your voice">
                <Mic />
            </Button>
        </form>
    )
}

export default CenterHeader;