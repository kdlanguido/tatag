"use client"

import { format } from "date-fns";
import { ColumnDef } from "@tanstack/react-table"
import { ActionButtons } from "./ActionButtons";

export const columns: ColumnDef<MemberShipUpdateLogCustomType>[] = [
    {
        accessorKey: "createdAt",
        header: "Date Created",
        cell: ({ row }) => {
            const date = new Date(row.getValue("createdAt") as string);
            return <div>{format(date, "MM/dd/yy hh:mm")}</div>;
        },
    },
    {
        accessorKey: "chapterId.name",
        header: "Request Chapter",
    },
    {
        accessorKey: "batchId.name",
        header: "Request Batch",
    },
    {
        accessorKey: "userId.nickname",
        header: "Member Nickname",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            return <div className="capitalize">{row.original.status}</div>;
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {

            return (
                <div className="text-right">
                    {
                        row?.original?.status === "pending" &&
                        <ActionButtons
                            reqId={row?.original?._id ?? ""}
                            email={row?.original?.userId.email ?? ""}
                        />
                    }
                </div>
            )
        },
    },
]