import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Calendar, Clock, MapPin, UserRoundSearch } from "lucide-react"
import Link from "next/link"

export default function Page() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-black via-zinc-900 to-black text-white flex flex-col items-center justify-center p-6">

            <div className="text-center mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <Trophy className="w-14 h-14 mx-auto text-yellow-500 drop-shadow-lg" />
                <h1 className="text-4xl md:text-5xl font-extrabold mt-4 tracking-wide">
                    Titan Arms Taguig:
                    <span className="block text-yellow-400 drop-shadow-md">
                        Rise of the Strongest
                    </span>
                </h1>
                <p className="mt-3 text-sm md:text-base text-zinc-300 max-w-xl mx-auto">
                    An epic clash of strength, brotherhood, and honor. Step forward and compete for the ultimate title — who will rise as the strongest Titan?
                </p>
            </div>

            <Card className="w-full max-w-2xl bg-zinc-900 border-zinc-800 shadow-xl animate-in fade-in zoom-in duration-700">
                <CardContent className="p-6 space-y-3">
                    <div className="space-y-3">
                        <h2 className="text-xl font-semibold text-yellow-400">
                            Event Details
                        </h2>

                        <div className="flex items-center gap-3 text-sm">
                            <Calendar className="w-5 h-5 text-yellow-500" />
                            <span className="text-white">Date: <strong>December 21, 2025</strong></span>
                        </div>

                        <div className="flex items-center gap-3 text-sm">
                            <Clock className="w-5 h-5 text-yellow-500" />
                            <span className="text-white">Time: <strong>1:00 PM – Onwards</strong></span>
                        </div>

                        <div className="flex items-center gap-3 text-sm">
                            <MapPin className="w-5 h-5 text-yellow-500" />
                            <span className="text-white">Venue: <strong>Titan Arms Taguig HQ</strong></span>
                        </div>

                        <div className="flex items-center gap-3 text-sm">
                            <UserRoundSearch className="w-5 h-5 text-yellow-500" />
                            <span className="text-white">Attire: <strong>TATAG Regalia</strong> or Type-B</span>
                        </div>
                    </div>

                    <div className="space-y-3 mt-5">
                        <h2 className="text-xl font-semibold text-yellow-400">
                            Event Mechanics
                        </h2>

                        <div className="flex items-center gap-3 text-sm">
                            <Calendar className="w-5 h-5 text-yellow-500" />
                            <span className="text-white">Date: <strong>December 21, 2025</strong></span>
                        </div>

                        <div className="flex items-center gap-3 text-sm">
                            <Clock className="w-5 h-5 text-yellow-500" />
                            <span className="text-white">Time: <strong>1:00 PM – Onwards</strong></span>
                        </div>

                        <div className="flex items-center gap-3 text-sm">
                            <MapPin className="w-5 h-5 text-yellow-500" />
                            <span className="text-white">Venue: <strong>Titan Arms Taguig HQ</strong></span>
                        </div>

                        <div className="flex items-center gap-3 text-sm">
                            <UserRoundSearch className="w-5 h-5 text-yellow-500" />
                            <span className="text-white">Attire: <strong>TATAG Regalia</strong> or Type-B</span>
                        </div>
                    </div>

                    <div className="pt-3 flex justify-center gap-2">
                        <Link href="/register">
                            <Button
                                size="sm"
                                className="px-4 py-2 md:px-10 md:py-6 text-xs md:text-md font-semibold bg-yellow-600 hover:bg-yellow-500 text-black shadow-lg hover:shadow-yellow-400/40 transition-all"
                            >
                                Register Now
                            </Button>
                        </Link>
                        <Link href="/register">
                            <Button
                                size="sm"
                                className="px-4 py-2 md:px-10 md:py-6 text-xs md:text-md font-semibold bg-yellow-600 hover:bg-yellow-500 text-black shadow-lg hover:shadow-yellow-400/40 transition-all"
                            >
                                View Attendees
                            </Button>
                        </Link>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}
