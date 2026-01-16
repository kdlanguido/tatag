import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation";
import { checkIfUserExists, checkIfUserHasClub } from "@/actions/user";
import MarketplaceCard from "@/app/(authenticated)/dashboard/_components/Marketplace";
import MembersFeed from "@/app/(authenticated)/dashboard/_components/MembersFeed";
import HighlightsContainer from "@/app/(authenticated)/dashboard/_components/Highlights";
import MyTraining from "@/app/(authenticated)/dashboard/_components/MyTraining";
import { fetchUserProfile } from "../_data/user";

export default async function Page() {

    const session = await auth.api.getSession({ headers: await headers() })
    const userProfile = await fetchUserProfile(session?.user?.email || "");

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
                <MyTraining userId={userProfile._id ?? ""} />
                <HighlightsContainer />
                <MarketplaceCard />
            </div>
            <div className="bg-muted/50 flex-1 rounded-xl">
                <MembersFeed />
            </div>
        </div>

    )
}