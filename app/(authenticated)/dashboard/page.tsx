import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation";
import MarketplaceCard from "@/components/members/Dashboard/MarketplaceCard";
import HighlightsCard from "@/components/members/Dashboard/HighlightsCard";
import MembersFeed from "@/components/members/Dashboard/MembersFeed";
import WelcomeCard from "@/components/members/Dashboard/WelcomeCard";
import { checkIfUserExists, checkIfUserHasClub } from "@/actions/user";

export default async function Page() {

    const session = await auth.api.getSession({ headers: await headers() })

    if (!session) {
        redirect("/login")
    }

    const userExists = await checkIfUserExists()
    if (!userExists) {
        await auth.api.signOut({ headers: await headers() });
        redirect("/register")
    }

    const userHasClub = await checkIfUserHasClub()
    if (!userHasClub) {
        redirect("/membership")
    }

    return (

        <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                {/* <WelcomeCard /> */}
                <HighlightsCard />
                <MarketplaceCard />
            </div>
            <div className="bg-muted/50 flex-1 rounded-xl">
                <MembersFeed />
            </div>
        </div>

    )
}