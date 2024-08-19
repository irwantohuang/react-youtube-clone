import { ChevronLeft, ChevronRight } from "lucide-react"
import Button from "../../elements/Button"
import { useEffect, useRef, useState } from "react"

interface CategoryProps {
    categories: string[],
    selected: string,
    onSelect: (e: string) => void,
}

const Category = ({ categories, selected, onSelect }: CategoryProps) => {

    const [translate, setTranslate] = useState(0)
    const sectionRef = useRef<HTMLDivElement>(null);
    const [showNext, setShowNext] = useState(false);
    const [showPrevious, setShowPrevious] = useState(false)

    const handleClick = (type: string) => {
        if (type === 'previous') {
            setTranslate(translate => {
                const newTranslate = translate - 200;
                if (newTranslate <= 0) return 0;
                return newTranslate;
            })
        } else {
            setTranslate(translate => {
                if (sectionRef.current === null) return translate;

                const newTranslate = translate + 200;
                const edge = sectionRef.current.scrollWidth;
                const width = sectionRef.current.clientWidth;

                if (newTranslate + width >= edge) return edge - width;
                return newTranslate;
            })
        }
    }

    useEffect(() => {
        if (sectionRef.current == null) return;

        const observer = new ResizeObserver(entires => {
            const container = entires[0]?.target;
            if (container == null) return;

            setShowPrevious(translate > 0);
            setShowNext(translate + container.clientWidth < container.scrollWidth)
        })
        observer.observe(sectionRef.current)

        return () => observer.disconnect();
    }, [categories, translate])

    return (
        <section className="category sticky top-0 overflow-hidden z-10 h-14 flex items-center bg-white">
            <div ref={sectionRef} className="overflow-hidden relative">
                <div className="flex whitespace-nowrap gap-4 transition-transform w-[max-content]" style={{ transform: `translateX(-${translate}px)` }}>
                    {categories.map((category) => (
                        <Button key={category} variant={selected === category ? 'dark' : 'default'} className="px-3 py-1.5 text-xs rounded-lg lg:text-sm font-semibold" onClick={() => onSelect(category)}>{category}</Button>
                    ))}
                </div>

                {showPrevious && <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full flex items-center">
                    <Button variant="ghost" size="icon" tooltip="Previous" className="h-full aspect-square w-auto p-1.5" onClick={() => handleClick('previous')}>
                        <ChevronLeft />
                    </Button>
                </div>}

                {showNext && <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full flex items-center justify-end">
                    <Button variant="ghost" size="icon" tooltip="Next" className="h-full aspect-square w-auto p-1.5" onClick={() => handleClick('next')}>
                        <ChevronRight />
                    </Button>
                </div>}
            </div>
        </section>
    )
}

export default Category