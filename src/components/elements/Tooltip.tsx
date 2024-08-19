import { cva, VariantProps } from "class-variance-authority";

const tooltipVariants = cva('absolute z-[9999] bg-secondary-dark/50 text-white rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-100 whitespace-nowrap overflow-visible hidden group-hover:block', {
    variants: {
        variant: {
            default: "left-1/2 -translate-x-1/2 -bottom-7",
            top: "left-1/2 -translate-x-1/2 -top-7",
            left: "top-1/2 -translate-y-1/2 right-full mr-2",
            right: "top-1/2 -translate-y-1/2 left-full ml-2"
        },
        size: {
            default: "text-sm py-1 px-2",
            small: "text-xs py-1 px-2"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})

interface TooltipProps extends VariantProps<typeof tooltipVariants> {
    tooltip: string
}

const Tooltip = ({ variant, size, tooltip }: TooltipProps) => {
    return <span className={tooltipVariants({ variant, size })}>{tooltip}</span>
}

export default Tooltip;
