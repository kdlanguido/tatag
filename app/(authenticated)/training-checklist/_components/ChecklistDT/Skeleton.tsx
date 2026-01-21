import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const ChecklistTableSkeleton = () => {
  // Number of skeleton rows to show
  const skeletonRows = Array.from({ length: 5 })

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Training Name</TableHead>
          <TableHead className="w-[25%] text-center">Date Approved</TableHead>
          <TableHead className="w-[25%] text-center">Approved By</TableHead>
          <TableHead className="w-[8%] text-center">Status</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {skeletonRows.map((_, index) => (
          <TableRow
            key={index}
            className="hover:bg-muted/50 transition-colors"
          >
            {/* Training Name */}
            <TableCell>
              <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
            </TableCell>

            {/* Date Approved */}
            <TableCell className="text-center">
              <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto animate-pulse"></div>
            </TableCell>

            {/* Approved By */}
            <TableCell className="text-center">
              <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto animate-pulse"></div>
            </TableCell>

            {/* Status */}
            <TableCell className="text-center">
              <div className="h-4 bg-gray-300 rounded w-1/3 mx-auto animate-pulse"></div>
            </TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
