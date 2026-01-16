"use client"

import { format } from "date-fns";
import { ColumnDef } from "@tanstack/react-table"
import { ActionButtons } from "./ActionButtons";

export const columns: ColumnDef<MemberShipUpdateLogCustomType>[] = [
    {
        accessorKey: "trainingName",
        header: "Training Name",
    },
    {
        accessorKey: "dateApproved",
        header: "Date Approved",
        cell: ({ row }) => {
        const rawValue = row.getValue("dateApproved");

        if (!rawValue) return <div>--</div>;

            const date = new Date(rawValue as string);

            const isValidDate = !isNaN(date.getTime());

            return (
                <div>
                    {isValidDate ? format(date, "MM/dd/yy hh:mm a") : "--"}
                </div>
            ); 
        }
    },
    {
        accessorKey: "approvedBy.nickname",
        header: "Approved By",
        cell: ({ row }) => {
            const rawValue = row.getValue("approvedBy.nickname");
            if (!rawValue) return <div>--</div>;

            return (
                <div>
                   {row.getValue("approvedBy.nickname")}
                </div>
            );
        }
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