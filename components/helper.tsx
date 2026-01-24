import { Badge } from "./ui/badge"
import { useEffect, useState } from "react"


export const getBadge = (memberStatus: string) => {

    let color = ""

    switch (memberStatus) {
        case "new":
            color = "bg-orange-500"
            break
        case "applicant":
            color = "bg-blue-500"
            break
        case "active":
            color = "bg-green-500"
            break
        case "inactive":
            color = "bg-red-500"
            break
        case "denied":
            color = "bg-red-500"
            break
        default:
            color = "bg-gray-400"
    }

    return (
        <Badge className={`w-20 text-[10px] ${color} capitalize`}>
            {memberStatus}
        </Badge>
    )
}


export const useBreakpoint = () => {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth)
        onResize()
        window.addEventListener("resize", onResize)
        return () => window.removeEventListener("resize", onResize)
    }, [])

    if (width >= 1280) return "xl"
    if (width >= 1024) return "lg"
    if (width >= 768) return "md"
    return "sm"
}
