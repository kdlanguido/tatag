"use client"

import CardSwap from "@/components/CardSwap"

export default function CardSwapper() {
    return (
        <CardSwap
            cardDistance={18}
            verticalDistance={16}
            delay={4000}
            pauseOnHover={false}
        >
            <div className="h-[200px] w-full rounded-xl bg-white shadow-lg p-4">
                <h3 className="font-semibold">Card 1</h3>
                <p>Your content here</p>
            </div>

            <div className="h-[200px] w-full rounded-xl bg-white shadow-lg p-4">
                <h3 className="font-semibold">Card 2</h3>
                <p>Your content here</p>
            </div>

            <div className="h-[200px] w-full rounded-xl bg-white shadow-lg p-4">
                <h3 className="font-semibold">Card 3</h3>
                <p>Your content here</p>
            </div>
        </CardSwap>
    )
}
