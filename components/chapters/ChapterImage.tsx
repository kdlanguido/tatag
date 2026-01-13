"use client"
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import Image from 'next/image'
import { useState } from 'react';

export default function ChapterImage({ imageUrl }: { imageUrl: string }) {
    const [isLoading, setLoading] = useState(true);
    return (
        <>
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                </div>
            )}

            <Image
                src={imageUrl}
                alt="Chapter Logo"
                height={200}
                width={200}
                placeholder="blur"
                blurDataURL="/assets/logo.png"
                className={cn(
                    "object-contain  w-auto rounded-md transition-opacity duration-300",
                    isLoading ? "opacity-0" : "opacity-100"
                )}
                onLoad={() => setLoading(false)}
            />
        </>
    )
}
