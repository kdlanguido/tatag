import { fetchTrainings } from "@/actions/training"
import { columns } from "@/components/admins/Trainings/Columns"
import { DataTable } from "@/components/admins/Trainings/Data-Table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"

export default async function Page() {

    const data = await fetchTrainings()

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="flex flex-1 flex-col gap-4 p-4 w-full">

                <div className="flex justify-between items-end">
                    <div>
                        <h1 className="font-semibold">Manage Trainings</h1>
                        <h1 className=" text-sm text-muted-foreground">Manage titan arms trainings.</h1>
                    </div>

                    <Link href="/admin/trainings/create">
                        <Button>
                            Create
                            <Plus />
                        </Button>
                    </Link>
                </div>
                <DataTable columns={columns} data={data} />
            </div>
        </Suspense>
    )
}
