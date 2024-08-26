import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, useState } from "react";
import { twMerge } from "tailwind-merge";
import PlaceholderImage from '../../assets/placeholder.webp'


const ImageVariants = cva('transition-all duration-300 object-cover', {
    variants: {
        variant: {
            profile: "rounded-full",
            thumbnail: "block w-full ",
            short: "aspect-[9/16] block rounded-2xl"
        },
        size: {
            'profile-small': "w-10 h-10"
        }
    }
})

type ImageProps = VariantProps<typeof ImageVariants> & ComponentProps<"img">;

const Image = ({ variant, size, className, src, ...props }: ImageProps ) => {

    const [imageSrc, setImageSrc] = useState(src);


    return <img 
        src={imageSrc}
        onError={() => setImageSrc(PlaceholderImage)}
        {...props} 
        className={twMerge(ImageVariants({ variant, size }), className)} 
    />
}

export default Image;

