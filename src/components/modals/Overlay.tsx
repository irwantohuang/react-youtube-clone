interface OverlayProps {
    isOpen: boolean,
    onClick: (value: boolean) => void;
}

const Overlay = ({isOpen, onClick}: OverlayProps) => {
    if (isOpen) return <div onClick={() => onClick(!isOpen)} className="fixed inset-0 z-[1001] bg-transparent" />
    else return null;

}

export default Overlay;