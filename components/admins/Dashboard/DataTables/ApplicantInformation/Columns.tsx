"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ActionButtons } from "./ActionButtons";

export const columns: ColumnDef<UserIUI>[] = [
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
            return <div className="text-end pr-5"> <ActionButtons applicant={row.original} /></div>
        },
    }
]