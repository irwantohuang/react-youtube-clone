import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import Tooltip from "./Tooltip";

const buttonVariants = cva('transition-all', {
    variants: {
        variant: {
            default: 'bg-secondary hover:bg-secondary-hover',
            ghost: 'hover:bg-gray-100',
            ghostNonHover: "",
            dark: 'bg-secondary-dark hover:bg-secondary-dark-hover text-white'
        },
        size: {
            default: 'rounded p-2',
            icon: 'flex items-center justify-center w-10 h-10 rounded-full p-2.5'
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})

interface ButtonProps extends VariantProps<typeof buttonVariants>, ComponentProps<"button"> {
    tooltip?: string
}

const Button = ({ variant, size, className, children, tooltip, ...props }: ButtonProps) => {
    return (
        <div className="relative group">
            <button
                {...props}
                className={twMerge(buttonVariants({ variant, size }), className)}
            >
                {children}
            </button>
            
            { tooltip && <Tooltip tooltip={tooltip} /> }
        </div>

    )
}

export default Button;