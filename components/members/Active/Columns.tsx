"use client"

import { ColumnDef } from "@tanstack/react-table"
import { UserI } from "@/model/User.model";

export const columns: ColumnDef<UserI>[] = [

    {
        accessorKey: "batch.name",
        header: () => <div className="text-center w-[20%]">Batch</div>,
    },
    {
        accessorKey: "nickname",
        header: () => <div className=" w-[60%]">Member</div>,
    },
    {
        accessorKey: "membership.memberLevel",
        header: () => <div className=" w-[20%]">Type</div>,
        cell: ({ row }) => {

            return (
                <div className="capitalize">
                    {row?.original?.membership?.memberLevel ?? ""}
                </div>
            )
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {

            return (
                <div className="text-right">
                    {/* {
                        row?.original?.status === "pending" &&
                        <ActionButtons
                            reqId={row?.original?._id ?? ""}
                            email={row?.original?.userId.email ?? ""}
                        />
                    } */}
                </div>
            )
        },
    },
]