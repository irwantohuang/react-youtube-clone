interface OverlayProps {
    isOpen: boolean,
    onClick: (value: boolean) => void;
}

const Overlay = ({isOpen, onClick}: OverlayProps) => {
    if (isOpen) return <div onClick={() => onClick(!isOpen)} className="fixed inset-0 z-[1001] bg-secondary-dark/5" />
    else return null;

}

export default Overlay;