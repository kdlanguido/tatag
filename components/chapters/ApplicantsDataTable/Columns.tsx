"use client"

import { ActionButtons } from "./ActionButtons";
import { formatDateToString } from "@/lib/helpers";
import { CustomColumnDef } from "./Data-Table";

export const applicantColumns: CustomColumnDef<UserIUI, unknown>[] = [
    {
        accessorKey: "membership.createdAt",
        header: "Date Applied",
        cell: ({ row }) => {
            const createdAt = row.original.membership?.createdAt ? formatDateToString(row.original.membership?.createdAt) : ""
            return <div className="capitalize">{createdAt}</div>;
        },
    },

    {
        accessorKey: "nickname",
        header: "Nickname",
        cell: ({ row }) => {
            return <div className="capitalize">{row.getValue("nickname")}</div>;
        },
    },

    {
        accessorKey: "batch",
        header: "Batch",
        enableResizing: false,
        cell: ({ row }) => {
            const res = row.original.membership as MembershipIWithBatchName
            const batch = res.batchName || "TBA"
            return <div className="capitalize" >{batch}</div>
        }
    },

    {
        accessorKey: "actions",
        header: () => <div className="text-end pr-5">Actions</div>,
        cell: ({ row }) => {
            return <div className="text-end pr-5"> <ActionButtons user={row.original} /></div>
        },
    }
]