import { Badge } from "./ui/badge"

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
