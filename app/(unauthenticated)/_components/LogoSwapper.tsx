"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

type LogoSwapperProps = {
    images: string[]
    interval?: number
    className?: string
}

export function LogoSwapper({
    images,
    interval = 3000,
    className,
}: LogoSwapperProps) {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length)
        }, interval)

        return () => clearInterval(timer)
    }, [images.length, interval])

    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-full",
                "",
                className
            )}
        >
            {images.map((src, i) => (
                <Image
                    key={i}
                    src={src}
                    alt=""
                    fill
                    className={cn(
                        "object-cover transition-opacity duration-700 ease-in-out",
                        i === index ? "opacity-100" : "opacity-0"
                    )}
                    sizes="(max-width: 768px) 150px, 300px"
                    priority={i === 0}
                />
            ))}
        </div>
    )
}
