"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ActionButtons } from "./ActionButtons";

export const columns: ColumnDef<UserIUI>[] = [
    {
        accessorKey: "batch",
        header: "Batch",
        enableResizing: false,
        size: 100,
        cell: ({ row }) => {
            const res = row.original.membership as MembershipIWithBatchName
            const batch = res.batchName || "TBA"
            return <div className="capitalize" >{batch}</div>
        }
    },
    {
        accessorKey: "nickname",
        header: "Nickname",
        cell: ({ row }) => {
            return <div className="capitalize">{row.getValue("nickname")}</div>;
        },
    },
    {
        accessorKey: "actions",
        header: () => <div className="text-end pr-5">Actions</div>,
        cell: ({ row }) => {
            return <div className="text-end pr-5"> <ActionButtons user={row.original} /></div>
        },
    }
]