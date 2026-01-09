"use client"

import { ColumnDef } from "@tanstack/react-table"
import { TrainingI } from "@/model/Training.model";
import { ActionButtons } from "./ActionButtons";

export const columns: ColumnDef<TrainingI>[] = [
    {
        accessorKey: "name",
        header: "Training Name",
    },
    {
        accessorKey: "orderNo",
        header: "Order Number",
    },
    {
        id: "actions",
        cell: ({ row }) => {

            return (
                <div className="text-right">
                    <ActionButtons trainingId={row.original._id ?? ""} />
                </div>
            )
        },
    },
]