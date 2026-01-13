"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Loader2 } from "lucide-react"; 
import { cn } from "@/lib/utils"; 

export default function ChapterCard({ chapter }: { chapter: ChapterICustom }) {
    const [isLoading, setLoading] = useState(true);

    return (
        <Link href={"/chapters/" + chapter._id}>
            <Card className="w-full hover:shadow-lg transition-shadow duration-300 h-90">
                <CardContent className="flex flex-col items-center gap-5 p-2 px-6">
                    <div className="w-35 h-35 relative flex items-center justify-center bg-gray-50 rounded-md">
                        
                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                            </div>
                        )}

                        <Image
                            src={chapter.logo}
                            alt={chapter.name}
                            fill
                            className={cn(
                                "object-contain rounded-md transition-opacity duration-300",
                                isLoading ? "opacity-0" : "opacity-100"
                            )}
                            onLoad={() => setLoading(false)} 
                        />
                    </div>

                    <h3 className="text-center text-md font-semibold mb-2 h-10">{chapter.name}</h3>

                    {/* Rest of your info content... */}
                    <div className="flex flex-col gap-1 text-sm text-gray-700 w-full text-xs md:text-sm">
                        <p><span className="font-medium">Established:</span> {chapter.establishedYear ? new Date(chapter.establishedYear).toLocaleDateString() : ""}</p>
                        <p><span className="font-medium">Founder:</span> {chapter?.founder?.nickname ?? ""}</p>
                        <p><span className="font-medium">HQ Address:</span> {chapter?.hqAddress}</p>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}