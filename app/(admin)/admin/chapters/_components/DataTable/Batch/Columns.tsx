"use client"

import { format } from "date-fns";
import { ColumnDef } from "@tanstack/react-table"
import { BatchI } from "@/model/Batch.model";
import { ActionButtons } from "./ActionButtons";

export const columns: ColumnDef<BatchI>[] = [
    {
        accessorKey: "name",
        header: "Batch",
        cell: ({ row }) => {
            return <div className="capitalize">{row.getValue("name")}</div>;
        },

    },
    {
        accessorKey: "pruebaDate",
        header: "Prueba Date",
        cell: ({ row }) => {
            const date = new Date(row.getValue("pruebaDate") as string);
            return <div>{format(date, "MM/dd/yy")}</div>;
        },
    },
    {
        accessorKey: "status",
        header: ({ header }) => {
            return <div className="capitalize w-15">Status</div>;
        },
        cell: ({ row }) => {
            return <div className="capitalize w-15">{row.getValue("status")}</div>;
        },
    },
    {
        accessorKey: "actions",
        header: () => <div className="text-end pr-5">Actions</div>,
        cell: ({ row }) => {
            return <div className="text-end pr-5"> <ActionButtons batch={row.original} /></div>
        },
    }
]