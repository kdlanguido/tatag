import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"

export function ApplicationUnderReviewAlert() {
    return (
        <Alert className="border-blue-200 bg-blue-50 text-blue-900">
            <Info className="h-4 w-4 text-blue-600" />
            <AlertTitle>Application Status</AlertTitle>
            <AlertDescription>
                <p>
                    Your membership application is under <strong>Titan Arms Administrators</strong> review. An email update will be sent
                    to you once your application has been approved.
                </p>
            </AlertDescription>
        </Alert>
    )
}
