import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function ChapterCard({ chapter }: { chapter: ChapterICustom }) {
    return (
        <Link href={"/chapters/" + chapter._id}>
            <Card className="w-full hover:shadow-lg transition-shadow duration-300 h-90">
                <CardContent className="flex flex-col items-center gap-5 p-2 px-6">
                    <div className="w-35 h-35 relative">
                        <Image
                            src={chapter.logo}
                            alt={chapter.name}
                            fill
                            className="object-contain rounded-md"
                        />
                    </div>

                    <h3 className="text-center text-md font-semibold mb-2 h-10">{chapter.name}</h3>

                    <div className="flex flex-col gap-1 text-sm text-gray-700 w-full text-xs md:text-sm">
                        <p>
                            <span className="font-medium">Established:</span>{" "}
                            {chapter.establishedYear
                                ? new Date(chapter.establishedYear).toLocaleDateString("en-US", {
                                    month: "2-digit",
                                    day: "2-digit",
                                    year: "numeric",
                                })
                                : ""}
                        </p>
                        <p>
                            <span className="font-medium">Founder:</span> {chapter?.founder?.nickname ?? ""}
                        </p>
                        <p>
                            <span className="font-medium">HQ Address:</span> {chapter?.hqAddress}
                        </p>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
