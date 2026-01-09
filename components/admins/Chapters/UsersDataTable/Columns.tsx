"use client"

import { ColumnDef } from "@tanstack/react-table"
import { UserI } from "@/model/User.model";

export const columns: ColumnDef<UserI>[] = [
    {
        accessorKey: "nickname",
        header: "Member",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
]