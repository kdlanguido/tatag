import { Button } from '@/components/ui/button'
import { Eye } from 'lucide-react'

export default function Feed() {
    return (
        <div className="flex flex-col">
            <p className="text-sm font-semibold mb-2">
                Titan Arms Taguig: Rise of the Strongest
            </p>
            <p className="text-xs text-justify text-muted-foreground">
                An epic clash of strength, brotherhood, and honor. Step forward and compete for the ultimate title — who will rise as the strongest Titan?
            </p>
            <Button variant="ghost" className="cursor-pointer font-normal text-[12px] w-[120px] self-end text-end">
                <Eye />View More
            </Button>
        </div>
    )
}
