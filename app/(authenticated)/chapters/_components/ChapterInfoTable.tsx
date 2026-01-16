import {
    Table,
    TableBody,
    TableRow,
    TableCell,
} from "@/components/ui/table";
import { formatDateToString } from "@/lib/helpers";
import { ChapterI } from "@/model/Chapter.model";

export default function ChapterInfoTable({ chapterInfo }: { chapterInfo: ChapterI }) {
    return (
        <div className="border w-full md:w-[400px]">
            <Table className="text-xs">
                <TableBody>
                    <TableRow>
                        <TableCell>Region</TableCell>
                        <TableCell className="uppercase">{chapterInfo?.region ? chapterInfo.region : ""}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Date Established</TableCell>
                        <TableCell>{formatDateToString(chapterInfo?.establishedYear)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}
